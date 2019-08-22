export default data = {
  living_room: {
    name: 'Living Room',
    info: `
      * Open space living room
      * Easy access to all other rooms.
      * Big screen T.V. wall  mount`,
    adjacentRooms: ['private_room', 'play_room', 'bathroom']
  },
  play_room: {
    name: 'Play Room',
    info: `
      * Billiards table and ping pong table included.
      * Classic Space Invaders arcade game included.
      * Polished wood floors.
      * Entertaining and eating area for outside.
    `,
    adjacentRooms: ['bathroom']
  },
  private_room: {
    name: 'Private Room',
    info: `
    * Queen size bed.
    * Over looks surrounding acres.
    * Large closet for him and hers.`,
    adjacentRooms: ['living_room']
  },
  bathroom:  {
    name: 'Master Bathroom',
    info: `
      * Porcelain bath tiles and travertine molding.
      * Privacy glass block window.
      * Relaxing garden tub with jets.
      * Double extractor lighted vents.`,
    adjacentRooms: ['living_room']
  }
}
