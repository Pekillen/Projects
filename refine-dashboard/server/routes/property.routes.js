import express from "express";

import { createProperty, deletePropery, getAllProperties, getPropertyDetail, updateProperty } from "../controllers/property.controller.js";

const router = express.Router();

router.route('/').get(getAllProperties);
router.route('/:id').get(getPropertyDetail);
router.route('/').post(createProperty);
router.route('/:id').patch(updateProperty);
router.route('/:id').delete(deletePropery);

export default router;