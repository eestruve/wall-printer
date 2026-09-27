// ============================================
// Telegram Notification Service for Solution Print
// Sends leads directly to Telegram Group: «Заявки с сайта ПринтерСолюшн»
// ============================================

export const TG_BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN || '8349553967:AAHrrv-KYkaJIE8G7i5njp8Hu1WyXl8LuqE';
export const TG_CHAT_ID = import.meta.env.VITE_TG_CHAT_ID || '-5258958299';

/**
 * Escapes HTML characters to prevent breaking Telegram HTML parse_mode
 */
export function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Sends an HTML-formatted message to the Telegram group
 */
export async function sendTelegramMessage(htmlText) {
  const url = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TG_CHAT_ID,
      text: htmlText,
      parse_mode: 'HTML',
    }),
  });

  const result = await response.json();
  if (!response.ok || !result.ok) {
    throw new Error(result.description || `HTTP ${response.status}`);
  }
  return result;
}

/**
 * Sends an attached file/document to the Telegram group
 */
export async function sendTelegramDocument(file, caption) {
  const url = `https://api.telegram.org/bot${TG_BOT_TOKEN}/sendDocument`;
  const formData = new FormData();
  formData.append('chat_id', TG_CHAT_ID);
  formData.append('document', file, file.name);
  if (caption) {
    formData.append('caption', caption);
    formData.append('parse_mode', 'HTML');
  }

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  if (!response.ok || !result.ok) {
    throw new Error(result.description || `HTTP ${response.status}`);
  }
  return result;
}

/**
 * Submits a customer lead from the main CTA form / calculator
 */
export async function submitLead({ phone, comment, fileWall, fileSketch, source = 'Главная форма заявки' }) {
  const mskTime = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  let message = `<b>🔔 Новая заявка с сайта «Солюшин Принт»</b>\n\n`;
  message += `<b>📍 Источник:</b> ${escapeHtml(source)}\n`;
  message += `<b>📞 Телефон:</b> <code>${escapeHtml(phone)}</code>\n`;

  if (comment && comment.trim()) {
    message += `\n<b>💬 Детали и расчет:</b>\n${escapeHtml(comment.trim())}\n`;
  }

  const attached = [];
  if (fileWall) attached.push({ file: fileWall, label: 'Фото стены' });
  if (fileSketch) attached.push({ file: fileSketch, label: 'Эскиз / Рисунок' });

  if (attached.length > 0) {
    message += `\n<b>📎 Прикреплено файлов:</b> ${attached.length} (${attached.map(a => a.label).join(', ')})\n`;
  }

  message += `\n<i>🕒 МСК: ${mskTime}</i>`;

  // 1. Send primary notification
  await sendTelegramMessage(message);

  // 2. Upload attached documents if present
  for (const item of attached) {
    try {
      await sendTelegramDocument(
        item.file,
        `<b>📎 ${escapeHtml(item.label)}</b> к заявке: <code>${escapeHtml(phone)}</code>\nФайл: <i>${escapeHtml(item.file.name)}</i>`
      );
    } catch (err) {
      console.error(`Ошибка при отправке файла ${item.label}:`, err);
    }
  }

  return true;
}

/**
 * Submits a B2B partner lead from Designers Page
 */
export async function submitDesignerLead({ name, phone, studio, requestType, comment }) {
  const mskTime = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const requestTypeLabels = {
    samples: 'Запросить образцы выкрасов на материалах',
    project: 'Рассчитать стоимость проекта для клиента',
    partner: 'Обсудить партнерскую программу',
  };

  const purposeLabel = requestTypeLabels[requestType] || requestType || 'Не указана';

  let message = `<b>🎨 Новая партнерская заявка (Дизайнеры)</b>\n\n`;
  message += `<b>👤 Контактное лицо:</b> ${escapeHtml(name)}\n`;
  message += `<b>📞 Телефон:</b> <code>${escapeHtml(phone)}</code>\n`;
  if (studio && studio.trim()) {
    message += `<b>🏢 Студия / Портфолио:</b> ${escapeHtml(studio.trim())}\n`;
  }
  message += `<b>🎯 Цель обращения:</b> ${escapeHtml(purposeLabel)}\n`;

  if (comment && comment.trim()) {
    message += `\n<b>💬 Комментарий к проекту:</b>\n${escapeHtml(comment.trim())}\n`;
  }

  message += `\n<i>🕒 МСК: ${mskTime}</i>`;

  await sendTelegramMessage(message);
  return true;
}
