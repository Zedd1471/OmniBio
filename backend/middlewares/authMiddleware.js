function validateStudentId(req, res, next) {
  const { studentId } = req.body;
  if (!studentId || !/^BTH\/\d{3,}$/.test(studentId)) {
    return res.status(400).json({ error: 'Invalid student ID format' });
  }
  next();
}

module.exports = { validateStudentId };
