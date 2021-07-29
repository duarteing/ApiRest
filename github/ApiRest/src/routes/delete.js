const { Router } = require('express');
const router = router();

router.delete('/:id', (req, res) => {
    const {id}  = req.params;
_.each(sample, (sample, i) => {
    if (sample.id == id) {
        sample.splice(i, 1);
    }
});    
res.send(sample);
});

module.exports = router;