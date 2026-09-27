import { useState, useMemo } from 'react';
import { calculatorData } from '../data/siteData';
import './Calculator.css';

const SLIDER_MARKS = [
  { value: 1, label: '1 м²' },
  { value: 25, label: '25 м²' },
  { value: 50, label: '50 м²' },
  { value: 100, label: '100 м²' },
  { value: 150, label: '150 м²' },
];

export default function Calculator() {
  const [area, setArea] = useState(10);
  const [selectedConditions, setSelectedConditions] = useState([]);

  const activeTier = useMemo(() => {
    return (
      calculatorData.pricingTiers.find((t) => area <= t.maxArea) ||
      calculatorData.pricingTiers[calculatorData.pricingTiers.length - 1]
    );
  }, [area]);

  const calculation = useMemo(() => {
    const { basePackagePrice } = calculatorData;

    let total = 0;
    const isBasePackage = activeTier.isBase;

    if (isBasePackage) {
      total = basePackagePrice;
    } else {
      total = Math.round(area * activeTier.ratePerSqm);
    }

    return {
      isBasePackage,
      ratePerSqm: activeTier.ratePerSqm,
      tierLabel: activeTier.label,
      total,
    };
  }, [area, activeTier]);

  const toggleCondition = (id) => {
    setSelectedConditions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleScrollToForm = () => {
    const selectedList = calculatorData.additionalConditions.filter((c) =>
      selectedConditions.includes(c.id)
    );

    const conditionsText =
      selectedList.length > 0
        ? `• Дополнительные условия объекта:\n${selectedList.map((c) => `  - ${c.label}`).join('\n')}`
        : '• Дополнительные условия объекта: не выбраны (стандартный объект)';

    const commentText = `Параметры из калькулятора:
• Площадь нанесения: ${area} м² (${activeTier.isBase ? 'Базовый пакет до 5 м²' : `Тариф ${activeTier.label}: ${activeTier.ratePerSqm.toLocaleString('ru-RU')} ₽/м²`})
• Ориентировочная стоимость печати: ${calculation.total.toLocaleString('ru-RU')} ₽
${conditionsText}`;

    // Update via custom event for React state
    window.dispatchEvent(new CustomEvent('fill-calculator-data', { detail: commentText }));

    // Fallback direct DOM value assignment
    const textarea = document.getElementById('form-comment');
    if (textarea) {
      textarea.value = commentText;
    }

    const element = document.getElementById('cta-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const selectedList = useMemo(
    () => calculatorData.additionalConditions.filter((c) => selectedConditions.includes(c.id)),
    [selectedConditions]
  );

  return (
    <section className="calculator-section section" id="calculator">
      <div className="container">
        <div className="section-header fade-in">
          <span className="section-tag">Калькулятор проекта</span>
          <h2 className="section-title">{calculatorData.title}</h2>
          <p className="section-subtitle">{calculatorData.subtitle}</p>
        </div>

        <div className="calculator-card card fade-in">
          <div className="calculator-grid">
            {/* Left Column: Controls */}
            <div className="calculator-controls">
              {/* 1. Area Slider */}
              <div className="calc-group">
                <div className="calc-label-row">
                  <label htmlFor="area-slider" className="calc-label">1. Ориентировочная площадь нанесения</label>
                  <div className="calc-badge-group">
                    <span className="calc-tier-tag">
                      {activeTier.isBase
                        ? 'Минимальный пакет (до 5 м²)'
                        : `Тариф: ${activeTier.ratePerSqm.toLocaleString('ru-RU')} ₽/м²`}
                    </span>
                    <span className="calc-value-badge">{area} м²</span>
                  </div>
                </div>
                <div className="calc-range-container">
                  <input
                    id="area-slider"
                    type="range"
                    min="1"
                    max="150"
                    step="1"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="calc-range"
                    style={{
                      background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) calc(12px + (100% - 24px) * ${(area - 1) / 149}), var(--color-bg-tertiary) calc(12px + (100% - 24px) * ${(area - 1) / 149}), var(--color-bg-tertiary) 100%)`,
                    }}
                  />
                  <div className="calc-range-marks">
                    {SLIDER_MARKS.map((mark) => {
                      const isMin = mark.value === 1;
                      const isMax = mark.value === 150;
                      const style = isMin
                        ? { left: '0' }
                        : isMax
                        ? { right: '0', left: 'auto' }
                        : {
                            left: `calc(12px + (100% - 24px) * ${(mark.value - 1) / 149})`,
                            transform: 'translateX(-50%)',
                          };
                      const isActive = area === mark.value;

                      return (
                        <button
                          key={mark.value}
                          type="button"
                          className={`calc-range-mark ${isActive ? 'calc-range-mark--active' : ''}`}
                          style={style}
                          onClick={() => setArea(mark.value)}
                        >
                          {mark.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 2. Additional Conditions */}
              <div className="calc-group">
                <div className="calc-label-row">
                  <label className="calc-label">2. Дополнительные параметры объекта</label>
                  <span className="calc-sublabel-hint">Отметьте особенности помещения</span>
                </div>
                <div className="calc-conditions-grid">
                  {calculatorData.additionalConditions.map((cond) => {
                    const isChecked = selectedConditions.includes(cond.id);
                    return (
                      <label
                        key={cond.id}
                        className={`calc-condition-card ${isChecked ? 'calc-condition-card--active' : ''}`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleCondition(cond.id)}
                          className="calc-condition-checkbox"
                        />
                        <div className="calc-condition-content">
                          <div className="calc-condition-title">
                            <span className="calc-condition-icon">{cond.icon}</span>
                            <span>{cond.label}</span>
                          </div>
                          <div className="calc-condition-note">{cond.note}</div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Breakdown & Summary */}
            <div className="calculator-summary">
              <div>
                <div className="summary-header-row">
                  <h3 className="summary-title">Детализация расчета</h3>
                  <span className="summary-tier-badge">
                    {activeTier.isBase ? 'Базовый пакет' : `Тариф ${activeTier.label}`}
                  </span>
                </div>

                <div className="summary-list">
                  {calculation.isBasePackage ? (
                    <div className="summary-item">
                      <span className="summary-item__label">
                        Базовый пакет "Старт под ключ"
                        <small>Выезд бригады, доставка, калибровка датчиков и печать до 5 м²</small>
                      </span>
                      <span className="summary-item__value">
                        {calculation.total.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  ) : (
                    <div className="summary-item">
                      <span className="summary-item__label">
                        Печать изображения ({area} м²)
                        <small>
                          Тариф {activeTier.label}: {activeTier.ratePerSqm.toLocaleString('ru-RU')} ₽/м²
                        </small>
                      </span>
                      <span className="summary-item__value">
                        {calculation.total.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                  )}

                  {/* Conditions summary */}
                  <div className="summary-conditions-box">
                    <span className="summary-conditions-title">
                      Параметры объекта ({selectedList.length}):
                    </span>
                    {selectedList.length === 0 ? (
                      <span className="summary-conditions-empty">
                        Стандартный объект (дополнительные условия не выбраны)
                      </span>
                    ) : (
                      <ul className="summary-conditions-list">
                        {selectedList.map((item) => (
                          <li key={item.id} className="summary-condition-item">
                            <span className="summary-condition-dot">•</span>
                            <span className="summary-condition-name">{item.label}</span>
                            <span className="summary-condition-status">Уточняйте у менеджера</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div className="summary-divider"></div>

                <div className="summary-total">
                  <div className="summary-total__label">Ориентировочная стоимость печати:</div>
                  <div className="summary-total__price">{calculation.total.toLocaleString('ru-RU')} ₽</div>
                  <div className="summary-total__disclaimer">
                    * Базовый расчет печати. Точную стоимость с учетом дополнительных условий объекта уточняйте у менеджера.
                  </div>
                </div>

                <button type="button" className="btn btn-accent btn-calc-cta" onClick={handleScrollToForm}>
                  Зафиксировать расчет и заказать выезд
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
