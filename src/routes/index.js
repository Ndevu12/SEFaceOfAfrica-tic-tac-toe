import Route from 'express'

const router = Route();

router.get('/test', (req, res) => {
    res.send('This is testing route');
})


export default router;