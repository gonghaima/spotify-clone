import { Album } from '../models/album.model.js';

/**
 * Retrieves all albums and returns them in the response.
 *
 * @param {Object} req - The request object, containing parameters and other data.
 * @param {Object} res - The response object used to send the HTTP response.
 * @param {Function} next - The next middleware function in the application's request-response cycle.
 */
/******  4167ac9c-cd27-4ee8-a38b-7a95779c3918  *******/
export const getAllAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find();
    res.status(200).json(albums);
  } catch (error) {
    next(error);
  }
};

/**
 * Retrieves an album by its ID and returns it along with its associated songs.
 *
 * @param {Object} req - The request object, containing parameters and other data.
 * @param {Object} req.params - The parameters object from the request.
 * @param {string} req.params.albumId - The ID of the album to retrieve.
 * @param {Object} res - The response object used to send the HTTP response.
 * @param {Function} next - The next middleware function in the stack.
 *
 * @returns {void} - Sends a JSON response with the album data if found, or a 404 status with an error message if not found.
 */

export const getAlbumById = async (req, res, next) => {
  try {
    const { albumId } = req.params;

    const album = await Album.findById(albumId).populate('songs');

    if (!album) {
      return res.status(404).json({ message: 'Album not found' });
    }

    res.status(200).json(album);
  } catch (error) {
    next(error);
  }
};
