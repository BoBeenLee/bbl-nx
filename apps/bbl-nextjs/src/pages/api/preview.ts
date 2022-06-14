import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(__: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({});
  res.end('Preview mode enabled');
}
