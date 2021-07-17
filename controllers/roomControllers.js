const allRooms = (req, res) => {
    res.status(200).json({
        success: true,
        sessage: 'All Rooms'
    })
}

export {
    allRooms
}