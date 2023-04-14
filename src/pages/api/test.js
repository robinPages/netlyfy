// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest, NextRequest as req, NextResponse as res } from 'next';

export default function handler(req, res) {
   res.status(200).json([
      { id: 1, name: 'John Doe', job: true },
      { id: 2, name: 'Doe', job: false },
      { id: 3, name: 'Doe', job: false },
      { id: 4, name: 'Doe', job: false },
      { id: 5, name: 'Doe', job: false },
      { id: 6, name: 'Doe', job: false },
      { id: 7, name: 'Doe', job: false },
   ]);
}
