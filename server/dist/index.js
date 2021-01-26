"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const auth_1 = __importDefault(require("./routes/auth"));
const tanks_1 = __importDefault(require("./routes/tanks"));
const admin_1 = __importDefault(require("./routes/admin"));
const app = express_1.default();
const port = process.env.PORT || 5000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, '..', '..', 'client', 'build')));
app.use('/api/auth', auth_1.default);
app.use('/api', tanks_1.default);
app.use('/api/admin', admin_1.default);
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '..', '..', 'client', 'build', 'index.html'));
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
