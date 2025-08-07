"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MoedaUtil {
    static format(value, locale = 'pt-AO', moeda = "AOA") {
        return Intl.NumberFormat(locale, {
            style: 'currency',
            currency: moeda,
            minimumFractionDigits: 2,
        }).format(value);
    }
}
exports.default = MoedaUtil;
//# sourceMappingURL=MoedaUtils.js.map