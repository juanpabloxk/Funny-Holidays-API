import { VercelRequest, VercelResponse } from '@vercel/node';
import holidaysArray from '../../data/holidays_v3.json';

export default (req: VercelRequest, res: VercelResponse) => {
  const { month, day } = req.query;
  const monthStr = Array.isArray(month) ? month[0] : String(month);
  const dayStr = Array.isArray(day) ? day[0] : String(day);
  console.log('Searching a holiday with parameters:', monthStr, 'and', dayStr);
  const targetDate = `${monthStr.toLowerCase()} ${dayStr.toLowerCase()}`;
  const holidays = holidaysArray.filter((candidate) => {
    return targetDate === candidate.date.toLowerCase();
  });
  res.status(200).json({ count: holidays.length, holidays });
};
