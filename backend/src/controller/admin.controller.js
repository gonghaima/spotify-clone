export const getAdmin = async (req, res) => {
  res.send('Admin');
};

export const createSong = async (req, res, next) => {
  try {
    res.send('Song created');
  } catch (error) {
    next(error);
  }
};
