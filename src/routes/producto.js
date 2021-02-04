const express = require('express');
const router = express.Router();
 
const productoController = require('../controllers/productoController');

router.get('/', productoController.rubro0);
router.get('/spdro', productoController.rubro0);
router.get('/spdro/:id', productoController.rubro);
router.get('/rubro', productoController.rubro);
router.get('/rubro/:id', productoController.rubro);
router.get('/spdro/rubro/:id', productoController.rubro);

router.get('/producto', productoController.list1);
router.get('/producto/:id', productoController.list);
router.get('/spdro/producto/:id', productoController.list);

router.get('/snippet', productoController.list3);
router.get('/snippet/:id', productoController.list2);
router.get('/spdro/snippet/:id', productoController.list2);

/* router.get('/promo', productoController.promo1);
router.get('/promo/:id', productoController.promo);
router.get('/pompe/promo/:id', productoController.promo);   */

module.exports = router;
