import Route from 'express'
import userRoutes from '../routes/userRoute.js'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = Route();

router.use("/user", userRoutes);

router.get('/test', (req, res) => {
    res.send('This is testing route');
})


export default router;
