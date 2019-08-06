import { PICK_ROOM} from './constants'
import data from './data/house';

export const pickRoom = (room) => ({
  type: PICK_ROOM,
  payload: data[room]
})
