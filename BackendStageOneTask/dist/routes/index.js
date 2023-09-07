"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../controllers/index");
const express_1 = require("express");
const router = (0, express_1.Router)();
const index = new index_1.Index();
router.route('/').get(index.getInfo);
exports.default = router;
//# sourceMappingURL=index.js.map