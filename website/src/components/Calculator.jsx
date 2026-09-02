import { useState, useMemo } from 'react';
import { calculatorData } from '../data/siteData';
import './Calculator.css';

const SLIDER_MARKS = [
  { value: 1, label: '1 м²' },
  { value: 10, label: '10 м²' },
  { value: 25, label: '25 м²' },
  { value: 50, label: '50+ м²' },
];

export default function Calculator() {
  const [selectedType, setSelectedType] = useState(calculatorData.objectTypes[0].id);
  const [area, setArea] = useState(10);
  const [includePrep, setIncludePrep] = useState(false);

  const currentType = useMemo(
    () => calculatorData.objectTypes.find((t) => t.id === selectedType) || calculatorData.objectTypes[0],
    [selectedType]
  );

  const calculation = useMemo(() => {
    const { basePackagePrice, includedArea, pricePerSqmExtra, prepPricePerSqm } = calculatorData;
    
    // Extra area beyond 3 sqm
    const extraArea = Math.max(0, area - includedArea);
    const extraPrintCost = Math.round(extraArea * pricePerSqmExtra * currentType.multiplier);
    
    // Prep cost
    const prepCost = includePrep ? Math.round(area * prepPricePerSqm) : 0;
    
    // Total
    const total = basePackagePrice + extraPrintCost + prepCost;

    return {
      basePackagePrice,
      extraArea,
      extraPrintCost,
      prepCost,
      total,
    };
  }, [area, currentType, includePrep]);

  const handleScrollToForm = () => {
    const element = document.getElementById('cta-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              {/* 1. Object Type */}
              <div className="calc-group">
                <label className="calc-label">1. Выберите тип объекта</label>
                <div className="calc-chips">
                  {calculatorData.objectTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      className={`calc-chip ${selectedType === type.id ? 'calc-chip--active' : ''}`}
                      onClick={() => setSelectedType(type.id)}
                    >
                      <span className="calc-chip__icon">{type.icon}</span>
                      <span className="calc-chip__label">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Area Slider */}
              <div className="calc-group">
                <div className="calc-label-row">
                  <label htmlFor="area-slider" className="calc-label">2. Ориентировочная площадь нанесения</label>
                  <span className="calc-value-badge">{area} м²</span>
                </div>
                <div className="calc-range-container">
                  <input
                    id="area-slider"
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="calc-range"
                    style={{
                      background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) calc(12px + (100% - 24px) * ${(area - 1) / 49}), var(--color-bg-tertiary) calc(12px + (100% - 24px) * ${(area - 1) / 49}), var(--color-bg-tertiary) 100%)`,
                    }}
                  />
                  <div className="calc-range-marks">
                    {SLIDER_MARKS.map((mark) => {
                      const isMin = mark.value === 1;
                      const isMax = mark.value === 50;
                      const style = isMin
                        ? { left: '0' }
                        : isMax
                        ? { right: '0', left: 'auto' }
                        : {
                            left: `calc(12px + (100% - 24px) * ${(mark.value - 1) / 49})`,
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

              {/* 3. Wall Prep Option */}
              <div className="calc-group">
                <label className="calc-checkbox-card">
                  <input
                    type="checkbox"
                    checked={includePrep}
                    onChange={(e) => setIncludePrep(e.target.checked)}
                    className="calc-checkbox"
                  />
                  <div className="calc-checkbox-content">
                    <div className="calc-checkbox-title">
                      Требуется подготовка стены от «Солюшин Билдинг»
                      <span className="calc-checkbox-tag">+1 200 ₽/м²</span>
                    </div>
                    <div className="calc-checkbox-desc">
                      Выравнивание геометрии, шпаклевание трещин и обеспыливание для идеальной адгезии чернил
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Right Column: Breakdown & Summary */}
            <div className="calculator-summary">
              <h3 className="summary-title">Детализация расчета</h3>

              <div className="summary-list">
                <div className="summary-item">
                  <span className="summary-item__label">
                    Базовый пакет "Старт под ключ"
                    <small>Выезд бригады, доставка, калибровка датчиков и печать до 3 м²</small>
                  </span>
                  <span className="summary-item__value">45 000 ₽</span>
                </div>

                {calculation.extraArea > 0 && (
                  <div className="summary-item">
                    <span className="summary-item__label">
                      Дополнительная площадь (+{calculation.extraArea} м²)
                      <small>Печать по 1 500 ₽/м²</small>
                    </span>
                    <span className="summary-item__value">+{calculation.extraPrintCost.toLocaleString('ru-RU')} ₽</span>
                  </div>
                )}

                {includePrep && (
                  <div className="summary-item">
                    <span className="summary-item__label">
                      Подготовка стен ({area} м²)
                      <small>Малярные работы Солюшин Билдинг</small>
                    </span>
                    <span className="summary-item__value">+{calculation.prepCost.toLocaleString('ru-RU')} ₽</span>
                  </div>
                )}
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <div className="summary-total__label">Ориентировочная стоимость:</div>
                <div className="summary-total__price">{calculation.total.toLocaleString('ru-RU')} ₽</div>
                <div className="summary-total__note">*Точная сумма рассчитывается после оценки макета и выезда инженера</div>
              </div>

              <button type="button" className="btn btn-accent btn-calc-cta" onClick={handleScrollToForm}>
                Зафиксировать расчет и заказать выезд
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
