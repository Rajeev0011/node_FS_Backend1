const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get-Api is Working',
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.get('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Get-Api is working based on ID',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.post('/', (req, res, next) => {
  const name = req.body.name;
  res.status(201).json({
    message: 'Post-Api is working',
    metadata: {
      name: name,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.put('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Put-Api is working based on Id',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

router.delete('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Delete-Api is working based on Id',
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method,
    },
  });
});

module.exports = router;
