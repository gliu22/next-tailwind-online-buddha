// /api/orders/:id
import { getSession } from 'next-auth/react';
import db from '../../../utils/db';
import Order from '../../../models/Order';

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).send('Unauthorized');
  }

  await db.connect();
  const order = await Order.findById(req.query.id);
  await db.disconnect();
  res.send(order);
};

export default handler;
