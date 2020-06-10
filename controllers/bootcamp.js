/**
 * @desc    Get all bootcamps
 * @route   GET /api/v1/bootcamps
 * @access  Public
 */
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, data: 'Bootcamp' });
};

/**
 * @desc    Get single bootcamps
 * @route   GET /api/v1/bootcamp/:id
 * @access  Public
 */
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, data: 'Single Bootcamp' });
};

/**
 * @desc    Create new bootcamp
 * @route   POST /api/v1/bootcamp/
 * @access  Private
 */
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, data: 'Created Bootcamp' });
};

/**
 * @desc    Update bootcamp
 * @route   PUT /api/v1/bootcamp/:id
 * @access  Private
 */
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, data: 'Update Bootcamp' });
};

/**
 * @desc    Delete bootcamp
 * @route   DELETE /api/v1/bootcamp/:id
 * @access  Private
 */
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, data: 'Delete Bootcamp' });
};
