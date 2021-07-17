import nc from 'next-connect';

import { allRooms } from '../../../controllers/roomControllers';

const handler = nc();

handler.get(allRooms);

export default handler;