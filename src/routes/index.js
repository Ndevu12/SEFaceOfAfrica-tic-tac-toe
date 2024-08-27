import Route from 'express'
import userRoutes from '../routes/userRoute.js'
import gameRoute from '../routes/gameRoute.js'
const router = Route();

router.use("/user", userRoutes);
router.use('/game', gameRoute);

router.get('/test', (req, res) => {
    res.send('This is testing route');
})


export default router;