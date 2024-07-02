// This is a new file for solution!
import { hasRole, isLoggedIn } from '../middlewares/AuthMiddleware.js'
import * as PerformanceMiddleware from '../middlewares/PerformanceMiddleware.js'
import { handleValidation } from '../middlewares/ValidationHandlingMiddleware.js'
import PerformanceController from '../controllers/PerformanceController.js'

const loadFileRoutes = (app) => {
  // TO-DO
  // Introduce the needed routing
  app.route('/performances')
    .post(
      isLoggedIn,
      hasRole('owner'),
      PerformanceController.create
    )
}

export default loadFileRoutes
