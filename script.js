/**
 * XML Viewer Bundle (Refactored)
 */

// --- Constants ---
const XML_DEFINITIONS = {
    "XML1": { displayName: "XML1. Chỉ tiêu tổng hợp khám bệnh, chữa bệnh", innerXmlRootTag: "TONG_HOP", recordTag: "TONG_HOP", isSingleRecord: true, fields: ["MA_LK", "STT", "MA_BN", "HO_TEN", "SO_CCCD", "NGAY_SINH", "GIOI_TINH", "NHOM_MAU", "MA_QUOCTICH", "MA_DANTOC", "MA_NGHE_NGHIEP", "DIA_CHI", "MATINH_CU_TRU", "MAHUYEN_CU_TRU", "MAXA_CU_TRU", "DIEN_THOAI", "MA_THE_BHYT", "MA_DKBD", "GT_THE_TU", "GT_THE_DEN", "NGAY_MIEN_CCT", "LY_DO_VV", "LY_DO_VNT", "MA_LY_DO_VNT", "CHAN_DOAN_VAO", "CHAN_DOAN_RV", "MA_BENH_CHINH", "MA_BENH_KT", "MA_BENH_YHCT", "MA_PTTT_QT", "MA_DOITUONG_KCB", "MA_NOI_DI", "MA_NOI_DEN", "MA_TAI_NAN", "NGAY_VAO", "NGAY_VAO_NOI_TRU", "NGAY_RA", "GIAY_CHUYEN_TUYEN", "SO_NGAY_DTRI", "PP_DIEU_TRI", "KET_QUA_DTRI", "MA_LOAI_RV", "GHI_CHU", "NGAY_TTOAN", "T_THUOC", "T_VTYT", "T_TONGCHI_BV", "T_TONGCHI_BH", "T_BNTT", "T_BNCCT", "T_BHTT", "T_BHTT_GDV", "T_NGUONKHAC", "NAM_QT", "THANG_QT", "MA_LOAI_KCB", "MA_KHOA", "MA_CSKCB", "MA_KHUVUC", "CAN_NANG", "CAN_NANG_CON", "NAM_NAM_LIEN_TUC", "NGAY_TAI_KHAM", "MA_HSBA", "MA_TTDV", "DU_PHONG"] },
    "XML2": { displayName: "XML2. Chỉ tiêu chi tiết thuốc", innerXmlRootTag: "CHITIEU_CHITIET_THUOC", recordParentTag: "DSACH_CHI_TIET_THUOC", recordTag: "CHI_TIET_THUOC", fields: ["MA_LK", "STT", "MA_THUOC", "MA_PP_CHEBIEN", "MA_CSKCB_THUOC", "MA_NHOM", "TEN_THUOC", "DON_VI_TINH", "HAM_LUONG", "DUONG_DUNG", "DANG_BAO_CHE", "LIEU_DUNG", "CACH_DUNG", "SO_DANG_KY", "TT_THAU", "PHAM_VI", "TYLE_TT_BH", "SO_LUONG", "DON_GIA", "THANH_TIEN_BV", "THANH_TIEN_BH", "T_NGUONKHAC_NSNN", "T_NGUONKHAC_VTNN", "T_NGUONKHAC_VTTN", "T_NGUONKHAC_CL", "T_NGUONKHAC", "MUC_HUONG", "T_BNTT", "T_BNCCT", "T_BHTT", "MA_KHOA", "MA_BAC_SI", "MA_DICH_VU", "NGAY_YL", "NGAY_TH_YL", "MA_PTTT", "NGUON_CTRA", "VET_THUONG_TP", "DU_PHONG"] },
    "XML3": { displayName: "XML3. Chỉ tiêu chi tiết DVKT VTYT", innerXmlRootTag: "CHITIEU_CHITIET_DVKT_VTYT", recordParentTag: "DSACH_CHI_TIET_DVKT", recordTag: "CHI_TIET_DVKT", fields: ["MA_LK", "STT", "MA_DICH_VU", "MA_PTTT_QT", "MA_VAT_TU", "MA_NHOM", "GOI_VTYT", "TEN_VAT_TU", "TEN_DICH_VU", "MA_XANG_DAU", "DON_VI_TINH", "PHAM_VI", "SO_LUONG", "DON_GIA_BV", "DON_GIA_BH", "TT_THAU", "TYLE_TT_DV", "TYLE_TT_BH", "THANH_TIEN_BV", "THANH_TIEN_BH", "T_TRANTT", "MUC_HUONG", "T_NGUONKHAC_NSNN", "T_NGUONKHAC_VTNN", "T_NGUONKHAC_VTTN", "T_NGUONKHAC_CL", "T_NGUONKHAC", "T_BNTT", "T_BNCCT", "T_BHTT", "MA_KHOA", "MA_GIUONG", "MA_BAC_SI", "NGUOI_THUC_HIEN", "MA_BENH", "MA_BENH_YHCT", "NGAY_YL", "NGAY_TH_YL", "NGAY_KQ", "MA_PTTT", "VET_THUONG_TP", "PP_VO_CAM", "VI_TRI_TH_DVKT", "MA_MAY", "MA_HIEU_SP", "TAI_SU_DUNG", "DU_PHONG"] },
    "XML4": { displayName: "XML4. Chỉ tiêu chi tiết dịch vụ cận lâm sàng", innerXmlRootTag: "CHITIEU_CHITIET_DICHVUCANLAMSANG", recordParentTag: "DSACH_CHI_TIET_CLS", recordTag: "CHI_TIET_CLS", fields: ["MA_LK", "STT", "MA_DICH_VU", "MA_CHI_SO", "TEN_CHI_SO", "GIA_TRI", "DON_VI_DO", "MO_TA", "KET_LUAN", "NGAY_KQ", "MA_BS_DOC_KQ", "DU_PHONG"] },
    "XML5": { displayName: "XML5. Chỉ tiêu chi tiết diễn biến lâm sàng", innerXmlRootTag: "CHITIEU_CHITIET_DIENBIENLAMSANG", recordParentTag: "DSACH_CHI_TIET_DIEN_BIEN_BENH", recordTag: "CHI_TIET_DIEN_BIEN_BENH", fields: ["MA_LK", "STT", "DIEN_BIEN_LS", "GIAI_DOAN_BENH", "HOI_CHAN", "PHAU_THUAT", "THOI_DIEM_DBLS", "NGUOI_THUC_HIEN", "DU_PHONG"] },
    "XML6": { displayName: "XML6. Chỉ tiêu hồ sơ bệnh án chăm sóc và điều trị HIV/AIDS", innerXmlRootTag: "CHI_TIEU_HO_SO_BENH_AN_CHAM_SOC_VA_DIEU_TRI_HIV_AIDS", recordParentTag: "DSACH_HO_SO_BENH_AN_CHAM_SOC_VA_DIEU_TRI_HIV_AIDS", recordTag: "HO_SO_BENH_AN_CHAM_SOC_VA_DIEU_TRI_HIV_AIDS", fields: ["MA_LK", "MA_THE_BHYT", "SO_CCCD", "NGAY_SINH", "GIOI_TINH", "DIA_CHI", "MATINH_CU_TRU", "MAHUYEN_CU_TRU", "MAXA_CU_TRU", "NGAYKD_HIV", "NOI_LAY_MAU_XN", "NOI_XN_KD", "NOI_BDDT_ARV", "BDDT_ARV", "MA_PHAC_DO_DIEU_TRI_BD", "MA_BAC_PHAC_DO_BD", "MA_LYDO_DTRI", "LOAI_DTRI_LAO", "SANG_LOC_LAO", "PHACDO_DTRI_LAO", "NGAYBD_DTRI_LAO", "NGAYKT_DTRI_LAO", "KQ_DTRI_LAO", "MA_LYDO_XNTL_VR", "NGAY_XN_TLVR", "KQ_XNTL_VR", "NGAY_KQ_XN_TLVR", "MA_LOAI_BN", "GIAI_DOAN_LAM_SANG", "NHOM_DOI_TUONG", "MA_TINH_TRANG_DK", "LAN_XN_PCR", "NGAY_XN_PCR", "NGAY_KQ_XN_PCR", "MA_KQ_XN_PCR", "NGAY_NHAN_TT_MANG_THAI", "NGAY_BAT_DAU_DT_CTX", "MA_XU_TRI", "NGAY_BAT_DAU_XU_TRI", "NGAY_KET_THUC_XU_TRI", "MA_PHAC_DO_DIEU_TRI", "MA_BAC_PHAC_DO", "SO_NGAY_CAP_THUOC_ARV", "NGAY_CHUYEN_PHAC_DO", "LY_DO_CHUYEN_PHAC_DO", "MA_CSKCB", "DU_PHONG"] },
    "XML7": { displayName: "XML7. Chỉ tiêu dữ liệu giấy ra viện", innerXmlRootTag: "CHI_TIEU_DU_LIEU_GIAY_RA_VIEN", recordTag: "CHI_TIEU_DU_LIEU_GIAY_RA_VIEN", isSingleRecord: true, fields: ["MA_LK", "SO_LUU_TRU", "MA_YTE", "MA_KHOA_RV", "NGAY_VAO", "NGAY_RA", "MA_DINH_CHI_THAI", "NGUYENNHAN_DINHCHI", "THOIGIAN_DINHCHI", "TUOI_THAI", "CHAN_DOAN_RV", "PP_DIEUTRI", "GHI_CHU", "MA_TTDV", "MA_BS", "TEN_BS", "NGAY_CT", "MA_CHA", "MA_ME", "MA_THE_TAM", "HO_TEN_CHA", "HO_TEN_ME", "SO_NGAY_NGHI", "NGOAITRU_TUNGAY", "NGOAITRU_DENNGAY", "DU_PHONG"] },
    "XML8": { displayName: "XML8. Chỉ tiêu dữ liệu tóm tắt hồ sơ bệnh án", innerXmlRootTag: "CHI_TIEU_DU_LIEU_TOM_TAT_HO_SO_BENH_AN", recordTag: "CHI_TIEU_DU_LIEU_TOM_TAT_HO_SO_BENH_AN", isSingleRecord: true, fields: ["MA_LK", "MA_LOAI_KCB", "HO_TEN_CHA", "HO_TEN_ME", "NGUOI_GIAM_HO", "DON_VI", "NGAY_VAO", "NGAY_RA", "CHAN_DOAN_VAO", "CHAN_DOAN_RV", "QT_BENHLY", "TOMTAT_KQ", "PP_DIEUTRI", "NGAY_SINHCON", "NGAY_CONCHET", "SO_CONCHET", "KET_QUA_DTRI", "GHI_CHU", "MA_TTDV", "NGAY_CT", "MA_THE_TAM", "DU_PHONG"] },
    "XML9": { displayName: "XML9. Chỉ tiêu dữ liệu giấy chứng sinh", innerXmlRootTag: "CHI_TIEU_DU_LIEU_GIAY_CHUNG_SINH", recordParentTag: "DSACH_GIAYCHUNGSINH", recordTag: "DU_LIEU_GIAY_CHUNG_SINH", fields: ["MA_LK", "MA_BHXH_NND", "MA_THE_NND", "HO_TEN_NND", "NGAYSINH_NND", "MA_DANTOC_NND", "SO_CCCD_NND", "NGAYCAP_CCCD_NND", "NOICAP_CCCD_NND", "NOI_CU_TRU_NND", "MA_QUOCTICH", "MATINH_CU_TRU", "MAHUYEN_CU_TRU", "MAXA_CU_TRU", "HO_TEN_CHA", "MA_THE_TAM", "HO_TEN_CON", "GIOI_TINH_CON", "SO_CON", "LAN_SINH", "SO_CON_SONG", "CAN_NANG_CON", "NGAY_SINH_CON", "NOI_SINH_CON", "TINH_TRANG_CON", "SINHCON_PHAUTHUAT", "SINHCON_DUOI32TUAN", "GHI_CHU", "NGUOI_DO_DE", "NGUOI_GHI_PHIEU", "NGAY_CT", "SO", "QUYEN_SO", "MA_TTDV", "DU_PHONG"] },
    "XML10": { displayName: "XML10. Chỉ tiêu dữ liệu giấy chứng nhận nghỉ dưỡng thai", innerXmlRootTag: "CHI_TIEU_DU_LIEU_GIAY_NGHI_DUONG_THAI", recordTag: "CHI_TIEU_DU_LIEU_GIAY_NGHI_DUONG_THAI", isSingleRecord: true, fields: ["MA_LK", "SO_SERI", "SO_CT", "SO_NGAY", "DON_VI", "CHAN_DOAN_RV", "TU_NGAY", "DEN_NGAY", "MA_TTDV", "TEN_BS", "MA_BS", "NGAY_CT", "DU_PHONG"] },
    "XML11": { displayName: "XML11. Chỉ tiêu dữ liệu giấy chứng nhận nghỉ hưởng BHXH", innerXmlRootTag: "CHI_TIEU_DU_LIEU_GIAY_CHUNG_NHAN_NGHI_VIEC_HUONG_BAO_HIEM_XA_HOI", recordTag: "CHI_TIEU_DU_LIEU_GIAY_CHUNG_NHAN_NGHI_VIEC_HUONG_BAO_HIEM_XA_HOI", isSingleRecord: true, fields: ["MA_LK", "SO_CT", "SO_SERI", "SO_KCB", "DON_VI", "MA_BHXH", "MA_THE_BHYT", "CHAN_DOAN_RV", "PP_DIEUTRI", "MA_DINH_CHI_THAI", "NGUYENNHAN_DINHCHI", "TUOI_THAI", "SO_NGAY_NGHI", "TU_NGAY", "DEN_NGAY", "HO_TEN_CHA", "HO_TEN_ME", "MA_TTDV", "MA_BS", "NGAY_CT", "MA_THE_TAM", "MAU_SO", "DU_PHONG"] },
    "XML13": { displayName: "XML13. Chỉ tiêu dữ liệu giấy chuyển tuyến", innerXmlRootTag: "CHI_TIEU_GIAYCHUYENTUYEN", recordTag: "CHI_TIEU_GIAYCHUYENTUYEN", isSingleRecord: true, fields: ["MA_LK", "SO_HOSO", "SO_CHUYENTUYEN", "GIAY_CHUYEN_TUYEN", "MA_CSKCB", "MA_NOI_DI", "MA_NOI_DEN", "HO_TEN", "NGAY_SINH", "GIOI_TINH", "MA_QUOCTICH", "MA_DANTOC", "MA_NGHE_NGHIEP", "DIA_CHI", "MA_THE_BHYT", "GT_THE_DEN", "NGAY_VAO", "NGAY_VAO_NOI_TRU", "NGAY_RA", "DAU_HIEU_LS", "CHAN_DOAN_RV", "QT_BENHLY", "TOMTAT_KQ", "PP_DIEUTRI", "MA_BENH_CHINH", "MA_BENH_KT", "MA_BENH_YHCT", "TEN_DICH_VU", "TEN_THUOC", "MA_LOAI_RV", "MA_LYDO_CT", "HUONG_DIEU_TRI", "PHUONGTIEN_VC", "HOTEN_NGUOI_HT", "CHUCDANH_NGUOI_HT", "MA_BAC_SI", "MA_TTDV", "DU_PHONG"] },
    "XML14": { displayName: "XML14. Chỉ tiêu dữ liệu giấy hẹn khám lại", innerXmlRootTag: "CHI_TIEU_GIAYHEN_KHAMLAI", recordTag: "CHI_TIEU_GIAYHEN_KHAMLAI", isSingleRecord: true, fields: ["MA_LK", "SO_GIAYHEN_KL", "MA_CSKCB", "HO_TEN", "NGAY_SINH", "GIOI_TINH", "DIA_CHI", "MA_THE_BHYT", "GT_THE_DEN", "NGAY_VAO", "NGAY_VAO_NOI_TRU", "NGAY_RA", "NGAY_HEN_KL", "CHAN_DOAN_RV", "MA_BENH_CHINH", "MA_BENH_KT", "MA_BENH_YHCT", "MA_DOITUONG_KCB", "MA_BAC_SI", "MA_TTDV", "NGAY_CT", "DU_PHONG"] },
    "XML15": { displayName: "XML15. Chỉ tiêu dữ liệu chi tiết điều trị bệnh lao", innerXmlRootTag: "CHI_TIEU_DIEUTRI_BENHLAO", recordParentTag: "DSACH_CHITIET_DIEUTRI_BENHLAO", recordTag: "CHITIET_DIEUTRI_BENHLAO", fields: ["MA_LK", "STT", "MA_BN", "HO_TEN", "SO_CCCD", "PHANLOAI_LAO_VITRI", "PHANLOAI_LAO_TS", "PHANLOAI_LAO_HIV", "PHANLOAI_LAO_VK", "PHANLOAI_LAO_KT", "LOAI_DTRI_LAO", "NGAYBD_DTRI_LAO", "PHACDO_DTRI_LAO", "NGAYKT_DTRI_LAO", "KET_QUA_DTRI_LAO", "MA_CSKCB", "NGAYKD_HIV", "BDDT_ARV", "NGAY_BAT_DAU_DT_CTX", "DU_PHONG"] }
};
const MA_LOAI_KCB_MAP = { '01': 'Khám bệnh', '02': 'Điều trị ngoại trú', '03': 'Điều trị nội trú', '04': 'Điều trị nội trú ban ngày', '05': 'Điều trị ngoại trú bệnh mạn tính (có khám bệnh và lĩnh thuốc)', '06': 'Điều trị lưu tại Trạm Y tế tuyến xã, Phòng khám đa khoa khu vực', '07': 'Nhận thuốc theo hẹn (không khám bệnh)', '08': 'Điều trị ngoại trú bệnh mạn tính (có KCB, DVKT/thuốc)', '09': 'Điều trị nội trú dưới 04 giờ', '10': 'Các trường hợp khác' };

// --- Utils ---
const Utils = {
    base64ToUtf8(str) { try { return new TextDecoder().decode(Uint8Array.from(atob(str), c => c.charCodeAt(0))); } catch (e) { console.error("Base64 Error", e); return ""; } },
    parseXmlDateTime(str) { if (!str || typeof str !== 'string' || str.length < 8) return null; const y=parseInt(str.substring(0,4)), m=parseInt(str.substring(4,6))-1, d=parseInt(str.substring(6,8)); const h=str.length>=10?parseInt(str.substring(8,10)):0, mi=str.length>=12?parseInt(str.substring(10,12)):0, s=str.length>=14?parseInt(str.substring(12,14)):0; if(isNaN(y)) return null; return new Date(y,m,d,h,mi,s); },
    formatDisplayDate(str) { const d=this.parseXmlDateTime(str); if(!d) return ''; const pad=(n)=>String(n).padStart(2,'0'); const datePart=`${pad(d.getDate())}/${pad(d.getMonth()+1)}/${d.getFullYear()}`; if(str.length>8) return `${datePart} ${pad(d.getHours())}:${pad(d.getMinutes())}`; return datePart; },
    isOutsideWorkingHours(d) { if(!d) return false; const m = d.getHours()*60 + d.getMinutes(); return !((m >= 420 && m <= 690) || (m >= 810 && m <= 1020)); }
};

// --- Services (Excel) ---
const DATE_FIELDS = new Set(["NGAY_SINH", "GT_THE_TU", "GT_THE_DEN", "NGAY_MIEN_CCT", "NGAY_VAO", "NGAY_VAO_NOI_TRU", "NGAY_RA", "NGAY_TTOAN", "NGAY_TAI_KHAM", "NGAY_YL", "NGAY_TH_YL", "NGAY_KQ", "NGAYKD_HIV", "NGAYBD_DTRI_LAO", "NGAYKT_DTRI_LAO", "NGAY_XN_TLVR", "NGAY_KQ_XN_TLVR", "NGAY_XN_PCR", "NGAY_KQ_XN_PCR", "NGAY_NHAN_TT_MANG_THAI", "NGAY_BAT_DAU_DT_CTX", "NGAY_BAT_DAU_XU_TRI", "NGAY_KET_THUC_XU_TRI", "NGAY_CHUYEN_PHAC_DO", "NGAY_CT", "NGAY_SINHCON", "NGAY_CONCHET", "NGOAITRU_TUNGAY", "NGOAITRU_DENNGAY", "NGAYCAP_CCCD_NND", "NGAY_SINH_CON", "TU_NGAY", "DEN_NGAY", "NGAY_HEN_KL", "XML2_NGAY_YL_MIN", "NGAY_CHI_DINH", "NGAY_CHECK"]);
const NUMERIC_FIELDS = new Set(["SO_LUONG", "DON_GIA", "DON_GIA_BV", "DON_GIA_BH", "T_BHTT", "THANH_TIEN_BV", "THANH_TIEN_BH", "T_THUOC", "T_VTYT", "T_TONGCHI_BV", "T_TONGCHI_BH", "T_BNTT", "T_BNCCT", "T_BHTT_GDV", "T_NGUONKHAC", "THOI_GIAN_TH_KQ_PHUT"]);
const ExcelService = {
    exportToXlsx(records, definition, filename) {
        if (!records || !records.length) { alert("Không có dữ liệu."); return; }
        const headers = ["STT", ...definition.fields];
        const data = records.map((rec, i) => [i + 1, ...definition.fields.map(f => {
            let v = rec[f] || '';
            if (DATE_FIELDS.has(f)) return Utils.formatDisplayDate(v);
            if (NUMERIC_FIELDS.has(f)) { const n = parseFloat(v); return isNaN(n) ? v : n; }
            return v;
        })]);
        const ws = XLSX.utils.aoa_to_sheet([headers, ...data]);
        
        // Format
        const dateIndices = definition.fields.map((f, i) => DATE_FIELDS.has(f) ? i + 1 : -1).filter(i => i !== -1);
        const lyDoIdx = definition.fields.indexOf('LY_DO');
        
        for (let r = 1; r < data.length + 1; r++) {
            dateIndices.forEach(c => { const cell = ws[XLSX.utils.encode_cell({r,c})]; if(cell) cell.t='s'; });
            if (lyDoIdx !== -1) {
                const cell = ws[XLSX.utils.encode_cell({r, c: lyDoIdx + 1})];
                if(cell) cell.s = { font: { color: { rgb: "FF0000" } } };
            }
        }
        
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        XLSX.writeFile(wb, `${filename}.xlsx`);
    }
};

// --- Strategies ---
class TimeMismatchStrategy {
    constructor() { this.id = 'timeMismatch'; this.title = 'Thời gian chỉ định/thực hiện/kết quả ngoài thời gian điều trị'; }
    analyze(data) {
        const xml1 = data.get('XML1')?.records || [], xml2 = data.get('XML2')?.records || [], xml3 = data.get('XML3')?.records || [];
        const xml1Map = new Map(xml1.map(r => [r.MA_LK, r]));
        const results = [];
        const check = (maLk, date, label) => {
            const r = xml1Map.get(maLk); if (!r || !date) return null;
            const d = Utils.parseXmlDateTime(date), v = Utils.parseXmlDateTime(r.NGAY_VAO), out = Utils.parseXmlDateTime(r.NGAY_RA);
            if (v && d < v) return `${label}: ${Utils.formatDisplayDate(date)} - Trước ngày vào`;
            if (out && d > out) return `${label}: ${Utils.formatDisplayDate(date)} - Sau ngày ra`;
            return null;
        };
        const add = (rec, type, name, reason) => { const x1 = xml1Map.get(rec.MA_LK); if(x1) results.push({ MA_LK: rec.MA_LK, MA_CSKCB: x1.MA_CSKCB, TEN_BN: x1.HO_TEN, LOAI_KCB: MA_LOAI_KCB_MAP[x1.MA_LOAI_KCB]||x1.MA_LOAI_KCB, TEN_CHI_TIEU: name, LOAI_CHI_TIEU: type, LY_DO: reason, NGAY_YL: rec.NGAY_YL, NGAY_TH_YL: rec.NGAY_TH_YL, NGAY_KQ: rec.NGAY_KQ, NGAY_VAO: x1.NGAY_VAO, NGAY_RA: x1.NGAY_RA }); };
        
        xml2.forEach(r => { const err = check(r.MA_LK, r.NGAY_YL, 'Ngày chỉ định'); if(err) add(r, 'Thuốc', r.TEN_THUOC, err); });
        xml3.forEach(r => {
            const errs = [check(r.MA_LK, r.NGAY_YL, 'Ngày chỉ định'), check(r.MA_LK, r.NGAY_TH_YL, 'Ngày thực hiện'), check(r.MA_LK, r.NGAY_KQ, 'Ngày kết quả')].filter(Boolean);
            if(errs.length) add(r, 'DVKT', r.TEN_DICH_VU, errs.join('; '));
        });
        
        const unique = new Map(); results.forEach(r => unique.set(r.MA_LK+r.LY_DO+r.TEN_CHI_TIEU, r));
        return { id: this.id, title: this.title, count: unique.size, records: Array.from(unique.values()), displayDefinition: { displayName: "Kết quả: Thời gian sai lệch", fields: ["MA_LK", "MA_CSKCB", "TEN_BN", "LOAI_KCB", "LOAI_CHI_TIEU", "TEN_CHI_TIEU", "NGAY_YL", "NGAY_TH_YL", "NGAY_KQ", "LY_DO", "NGAY_VAO", "NGAY_RA"] } };
    }
}
class OutOfHoursStrategy {
    constructor() { this.id = 'outOfHours'; this.title = 'Vào và ra viện ngoài giờ hành chính'; }
    analyze(data) {
        const res = (data.get('XML1')?.records || []).filter(r => {
            const v = Utils.parseXmlDateTime(r.NGAY_VAO), o = Utils.parseXmlDateTime(r.NGAY_RA);
            return v && o && Utils.isOutsideWorkingHours(v) && Utils.isOutsideWorkingHours(o);
        }).map(r => ({ MA_LK: r.MA_LK, MA_CSKCB: r.MA_CSKCB, HO_TEN: r.HO_TEN, LOAI_KCB: MA_LOAI_KCB_MAP[r.MA_LOAI_KCB]||r.MA_LOAI_KCB, NGAY_VAO: r.NGAY_VAO, NGAY_RA: r.NGAY_RA }));
        return { id: this.id, title: this.title, count: res.length, records: res, displayDefinition: { displayName: "Kết quả: Vào/ra ngoài giờ", fields: ["MA_LK", "MA_CSKCB", "HO_TEN", "LOAI_KCB", "NGAY_VAO", "NGAY_RA"] } };
    }
}
class ExecutionTimeStrategy {
    constructor() { this.id = 'executionTime'; this.title = 'DVKT có thời gian thực hiện dưới 5 phút'; }
    analyze(data) {
        const x1 = new Map((data.get('XML1')?.records||[]).map(r=>[r.MA_LK,r])), minD = new Map();
        (data.get('XML2')?.records||[]).forEach(r => { if(r.NGAY_YL && (!minD.get(r.MA_LK) || r.NGAY_YL < minD.get(r.MA_LK))) minD.set(r.MA_LK, r.NGAY_YL); });
        const res = [];
        (data.get('XML3')?.records||[]).forEach(r => {
            if (r.MA_NHOM === '13') return;
            const s = Utils.parseXmlDateTime(r.NGAY_TH_YL), e = Utils.parseXmlDateTime(r.NGAY_KQ);
            if (s && e && (e-s)/60000 < 5) {
                const x = x1.get(r.MA_LK); if(x) res.push({ MA_LK: r.MA_LK, MA_CSKCB: x.MA_CSKCB, TEN_BN: x.HO_TEN, TEN_DICH_VU: r.TEN_DICH_VU, MA_NHOM: r.MA_NHOM, MA_BAC_SI: r.MA_BAC_SI, NGUOI_THUC_HIEN: r.NGUOI_THUC_HIEN, NGAY_YL: r.NGAY_YL, NGAY_TH_YL: r.NGAY_TH_YL, NGAY_KQ: r.NGAY_KQ, THOI_GIAN_TH_KQ_PHUT: Math.round((e-s)/60000).toString(), XML2_NGAY_YL_MIN: minD.get(r.MA_LK)||'', NGAY_RA: x.NGAY_RA });
            }
        });
        return { id: this.id, title: this.title, count: res.length, records: res, displayDefinition: { displayName: "Kết quả: DVKT < 5 phút", fields: ["MA_LK", "MA_CSKCB", "TEN_BN", "TEN_DICH_VU", "MA_NHOM", "MA_BAC_SI", "NGUOI_THUC_HIEN", "NGAY_YL", "NGAY_TH_YL", "NGAY_KQ", "THOI_GIAN_TH_KQ_PHUT", "XML2_NGAY_YL_MIN", "NGAY_RA"] } };
    }
}
class ElectroacupunctureStrategy {
    constructor() { this.id = 'electroacupunctureTime'; this.title = 'Điện châm (08.0005.0230) dưới 20 phút'; }
    analyze(data) {
        const x1 = new Map((data.get('XML1')?.records||[]).map(r=>[r.MA_LK,r])), res = [];
        (data.get('XML3')?.records||[]).forEach(r => {
            if (r.MA_DICH_VU === '08.0005.0230') {
                const s = Utils.parseXmlDateTime(r.NGAY_TH_YL), e = Utils.parseXmlDateTime(r.NGAY_KQ);
                if (s && e && (e-s)/60000 < 20) {
                    const x = x1.get(r.MA_LK); if(x) res.push({ MA_LK: r.MA_LK, MA_CSKCB: x.MA_CSKCB, TEN_BN: x.HO_TEN, TEN_DICH_VU: r.TEN_DICH_VU, MA_NHOM: r.MA_NHOM, MA_BAC_SI: r.MA_BAC_SI, NGUOI_THUC_HIEN: r.NGUOI_THUC_HIEN, NGAY_YL: r.NGAY_YL, NGAY_TH_YL: r.NGAY_TH_YL, NGAY_KQ: r.NGAY_KQ, THOI_GIAN_TH_KQ_PHUT: Math.round((e-s)/60000).toString(), NGAY_RA: x.NGAY_RA });
                }
            }
        });
        return { id: this.id, title: this.title, count: res.length, records: res, displayDefinition: { displayName: "Điện châm < 20 phút", fields: ["MA_LK", "MA_CSKCB", "TEN_BN", "TEN_DICH_VU", "MA_NHOM", "MA_BAC_SI", "NGUOI_THUC_HIEN", "NGAY_YL", "NGAY_TH_YL", "NGAY_KQ", "THOI_GIAN_TH_KQ_PHUT", "NGAY_RA"] } };
    }
}
class MissingMachineCodeStrategy {
    constructor() { this.id = 'missingMachineCode'; this.title = 'Thiếu thông tin máy (MA_MAY)'; }
    analyze(data) {
        const x1 = new Map((data.get('XML1')?.records||[]).map(r=>[r.MA_LK,r])), res = [];
        const grp = new Set(['1', '2', '3']);
        (data.get('XML3')?.records||[]).forEach(r => {
            if (!r.MA_MAY || !r.MA_MAY.trim()) {
                if (grp.has(r.MA_NHOM) || (r.MA_NHOM === '18' && r.MA_DICH_VU === '08.0005.0230')) {
                    const x = x1.get(r.MA_LK);
                    res.push({ MA_LK: r.MA_LK, MA_CSKCB: x?.MA_CSKCB||'', TEN_BN: x?.HO_TEN||'', MA_DICH_VU: r.MA_DICH_VU, TEN_DICH_VU: r.TEN_DICH_VU, MA_NHOM: r.MA_NHOM, NGAY_YL: r.NGAY_YL });
                }
            }
        });
        return { id: this.id, title: this.title, count: res.length, records: res, displayDefinition: { displayName: "Thiếu mã máy", fields: ["MA_LK", "MA_CSKCB", "TEN_BN", "MA_DICH_VU", "TEN_DICH_VU", "MA_NHOM", "NGAY_YL"] } };
    }
}

// --- XmlProcessor ---
const XmlProcessor = {
    extractRecordsFromInnerXml(str, def) {
        const parser = new DOMParser(), doc = parser.parseFromString(str, "application/xml"), res = [];
        if (doc.getElementsByTagName("parsererror").length) return [];
        let nodes = [];
        if (def.isSingleRecord) nodes.push(doc.getElementsByTagName(def.recordTag)[0]);
        else {
            let ctr = doc.getElementsByTagName(def.innerXmlRootTag)[0];
            if (def.recordParentTag && ctr) ctr = ctr.getElementsByTagName(def.recordParentTag)[0];
            if (ctr) nodes = Array.from(ctr.getElementsByTagName(def.recordTag));
        }
        nodes.forEach(n => { if(!n) return; const r = {}; def.fields.forEach(f => r[f] = n.getElementsByTagName(f)[0]?.textContent?.trim() || ''); res.push(r); });
        return res;
    },
    async processAndGroupXmlFiles(files, onProgress) {
        const grouped = new Map(); let bad = 0;
        const processed = await Promise.all(files.map(f => new Promise(resolve => {
            const r = new FileReader(); r.onload = e => resolve({name: f.name, content: e.target.result}); r.onerror = () => resolve({name: f.name, content: null}); r.readAsText(f);
        })));
        processed.forEach((res, idx) => {
            if (!res.content) { bad++; return; }
            const doc = new DOMParser().parseFromString(res.content, "application/xml");
            if (doc.getElementsByTagName("parsererror").length) { bad++; return; }
            Array.from(doc.getElementsByTagName('FILEHOSO')).forEach(fh => {
                const type = fh.getElementsByTagName('LOAIHOSO')[0]?.textContent?.trim();
                const contentNode = fh.getElementsByTagName('NOIDUNGFILE')[0];
                let xmlStr = '';
                if(contentNode.firstElementChild) xmlStr = contentNode.innerHTML.trim();
                else xmlStr = Utils.base64ToUtf8(contentNode.textContent?.replace(/[^A-Za-z0-9+/=]/g, '') || '');
                if (type && xmlStr && XML_DEFINITIONS[type]) {
                    const def = XML_DEFINITIONS[type];
                    const recs = this.extractRecordsFromInnerXml(xmlStr, def);
                    if (recs.length) { if(!grouped.has(type)) grouped.set(type, {definition: def, records: []}); grouped.get(type).records.push(...recs); }
                }
            });
            onProgress({processed: idx+1, total: files.length});
        });
        return {groupedRecords: grouped, processedCount: files.length - bad, invalidFileCount: bad};
    }
};

// --- UIManager ---
class UIManager {
    constructor() {
        this.els = {
            file: document.getElementById('xmlFileInput'), type: document.getElementById('xmlTypeSelector'), table: document.getElementById('dataTableContainer'), 
            res: document.getElementById('analysisResultContainer'), prog: document.getElementById('progressContainer'), bar: document.getElementById('progressBar'), 
            lbl: document.getElementById('progressLabel'), exp: document.getElementById('exportXlsxButton'), sum: document.getElementById('analysisSummaryContainer'), 
            sel: document.getElementById('analysisSelectorContainer'), selType: document.getElementById('analysisTypeSelector'), help: document.getElementById('helpButton'), 
            modal: document.getElementById('helpModal'), close: document.getElementById('closeHelpModal')
        };
        this.state = { table: null, recs: [], def: null, sortKey: null, sortDir: 'asc', page: 1, pageSize: 5 };
    }
    addEventListeners(h) {
        this.els.file.addEventListener('change', h.onFileChange); this.els.type.addEventListener('change', h.onTypeSelect);
        this.els.selType.addEventListener('change', h.onAnalysisSelect); this.els.exp.addEventListener('click', h.onExportClick);
        if(this.els.help) {
            this.els.help.addEventListener('click', () => this.els.modal.style.display="block");
            this.els.close.addEventListener('click', () => this.els.modal.style.display="none");
            window.addEventListener('click', e => { if(e.target===this.els.modal) this.els.modal.style.display="none"; });
        }
    }
    displayMessage(ctr, msg, type='info') { ctr.innerHTML = `<p class="${type}-message">${msg}</p>`; this.state.table = null; }
    toggleExportButton(show) { this.els.exp.hidden = !show; if(!show) document.getElementById('buttonHoldingPen')?.appendChild(this.els.exp); }
    resetAnalysisView() { this.els.sum.innerHTML=''; this.displayMessage(this.els.res, 'Kết quả phân tích sẽ được hiển thị ở đây.'); this.els.sel.hidden=true; this.els.selType.innerHTML='<option value="">-- Chờ kết quả --</option>'; }
    displayAnalysisSummary(items, meta) {
        if(!items.some(i=>i.count>0)) { this.displayMessage(this.els.res, "Không tìm thấy lỗi.", "success"); return; }
        let h = `<h3 class="visible-heading">Báo cáo tổng hợp</h3>`;
        if(meta) h+=`<div style="margin-bottom:1.5rem;padding:1rem;background:#F7FAFC;border:1px solid #E2E8F0;border-radius:6px;"><b>Mã CSKCB:</b> ${meta.maCskcb} | <b>Thời gian:</b> ${meta.minDate} - ${meta.maxDate}</div>`;
        h+=`<table><thead><tr><th style="width:50px">STT</th><th>Nội dung</th><th style="width:150px">Số lượng</th></tr></thead><tbody>`;
        items.forEach((i, idx) => {
            const cls = i.count>0?'clickable-summary-row':''; const st = i.count>0?'color:#C53030;font-weight:bold':'color:#38A169';
            h+=`<tr class="${cls}" data-key="${i.key}"><td style="text-align:center">${idx+1}</td><td>${i.text}</td><td style="text-align:center;${st}">${i.count}</td></tr>`;
        });
        h+=`</tbody></table>`; this.els.sum.innerHTML = h;
        this.els.sum.querySelectorAll('.clickable-summary-row').forEach(r => r.addEventListener('click', () => { this.els.selType.value = r.dataset.key; this.els.selType.dispatchEvent(new Event('change')); this.els.res.scrollIntoView({behavior:'smooth'}); }));
    }
    populateAnalysisSelector(items) {
        const v = items.filter(i=>i.count>0); if(!v.length) { this.els.sel.hidden=true; return; }
        this.els.selType.innerHTML = '<option value="">-- Chọn lỗi --</option>' + v.map(i=>`<option value="${i.key}">${i.text} (${i.count})</option>`).join('');
        this.els.sel.hidden=false;
    }
    populateTypeSelector(data) {
        this.els.type.innerHTML = '<option value="">-- Chọn dữ liệu --</option>';
        if(data.size) Array.from(data.keys()).sort((a,b)=>parseInt(a.replace('XML',''))-parseInt(b.replace('XML','')))
            .forEach(k => this.els.type.innerHTML += `<option value="${k}">${data.get(k).definition.displayName}</option>`);
    }
    renderTable(recs, def, ctr) {
        this.state = { table: null, recs, def, sortKey: null, sortDir: 'asc', page: 1, pageSize: 5 };
        if(!recs.length) { this.displayMessage(ctr, `Không có dữ liệu: ${def.displayName}`); return; }
        ctr.innerHTML = ''; 
        const h = document.createElement('div'); h.className='table-header';
        h.innerHTML = `<h3 class="visible-heading">${def.displayName}</h3>`; h.appendChild(this.els.exp); ctr.appendChild(h);
        const w = document.createElement('div'); w.className='table-scroll-wrapper'; ctr.appendChild(w);
        const t = document.createElement('table'); t.innerHTML = `<thead><tr><th>STT</th>${def.fields.map(f=>`<th data-col="${f}">${f}</th>`).join('')}</tr></thead><tbody></tbody>`;
        this.state.table = t; w.appendChild(t);
        t.querySelector('thead').addEventListener('click', e => { const th = e.target.closest('th'); if(th && th.dataset.col) this._sort(th.dataset.col); });
        this._renderControls(ctr); this._update();
    }
    _sort(k) { if(this.state.sortKey===k) this.state.sortDir=this.state.sortDir==='asc'?'desc':'asc'; else { this.state.sortKey=k; this.state.sortDir='asc'; } this.state.page=1; this._update(); }
    _update() {
        const {table,recs,def,sortKey:k,sortDir:d,page,pageSize} = this.state;
        if(!table) return;
        table.querySelectorAll('th').forEach(th => { th.classList.remove('sorted-asc','sorted-desc'); if(th.dataset.col===k) th.classList.add(`sorted-${d}`); });
        let show = [...recs];
        if(k) { const dir = d==='asc'?1:-1; const isN=NUMERIC_FIELDS.has(k), isD=DATE_FIELDS.has(k); show.sort((a,b)=>{ const va=a[k]||'',vb=b[k]||''; if(isN) return (parseFloat(va)-parseFloat(vb))*dir; if(isD) return ((Utils.parseXmlDateTime(va)?.getTime()||0)-(Utils.parseXmlDateTime(vb)?.getTime()||0))*dir; return va.localeCompare(vb)*dir; }); }
        const total = show.length, max = Math.ceil(total/pageSize);
        if(this.state.page > max) this.state.page = max || 1;
        const start = (this.state.page-1)*pageSize;
        table.querySelector('tbody').innerHTML = show.slice(start, start+pageSize).map((r,i) => `<tr><td style="text-align:center">${start+i+1}</td>${def.fields.map(f => `<td>${DATE_FIELDS.has(f)?Utils.formatDisplayDate(r[f]):NUMERIC_FIELDS.has(f)?parseFloat(r[f]).toLocaleString('vi'):r[f]}</td>`).join('')}</tr>`).join('');
        const p = this.state.pagination; 
        if(p) { p.querySelector('.pagination-info').textContent = `Hiển thị ${total?start+1:0}-${Math.min(start+pageSize,total)} / ${total}`; p.querySelector('#prev').disabled = this.state.page<=1; p.querySelector('#next').disabled = this.state.page>=max; }
    }
    _renderControls(ctr) {
        const d = document.createElement('div'); d.className='pagination-container';
        d.innerHTML = `<div class="page-size-selector"><label>Hiển thị: <select id="ps"><option value="5">5</option><option value="10">10</option><option value="20">20</option><option value="50">50</option></select></label></div><span class="pagination-info"></span><div class="pagination-controls"><button id="prev" class="page-btn">Trước</button><button id="next" class="page-btn">Sau</button></div>`;
        d.querySelector('#ps').value = this.state.pageSize;
        d.querySelector('#ps').addEventListener('change', e => { this.state.pageSize=parseInt(e.target.value); this.state.page=1; this._update(); });
        d.querySelector('#prev').addEventListener('click', () => { if(this.state.page>1) { this.state.page--; this._update(); } });
        d.querySelector('#next').addEventListener('click', () => { this.state.page++; this._update(); });
        this.state.pagination = d; ctr.appendChild(d);
    }
    showProgress(t, l) { this.els.prog.hidden=false; this.els.bar.value=0; this.els.bar.max=t; this.els.lbl.textContent=l; }
    updateProgress(v, l) { this.els.bar.value=v; this.els.lbl.textContent=l; }
    hideProgress() { this.els.prog.hidden=true; }
    resetFileInput() { this.els.file.value = ''; }
}

// --- App ---
class App {
    constructor() {
        this.ui = new UIManager();
        this.strategies = [new TimeMismatchStrategy(), new OutOfHoursStrategy(), new ExecutionTimeStrategy(), new ElectroacupunctureStrategy(), new MissingMachineCodeStrategy()];
        this.resetApp();
    }
    init() { this.ui.addEventListeners({ onFileChange: this.handleFile.bind(this), onTypeSelect: this.handleType.bind(this), onAnalysisSelect: this.handleAnalysis.bind(this), onExportClick: this.handleExport.bind(this) }); }
    resetApp() { this.data = new Map(); this.results = new Map(); this.view = null; this.meta = {maCskcb:'',minDate:'',maxDate:''}; this.ui.populateTypeSelector(this.data); this.ui.resetAnalysisView(); this.ui.hideProgress(); this.ui.toggleExportButton(false); }
    handleFile(e) {
        const files = Array.from(e.target.files || []); if(!files.length) return;
        this.resetApp(); this.ui.showProgress(files.length, "Đang xử lý...");
        setTimeout(async () => {
            try {
                const res = await XmlProcessor.processAndGroupXmlFiles(files, p => this.ui.updateProgress(p.processed, `Xử lý ${p.processed}/${p.total}`));
                this.data = res.groupedRecords; this.ui.populateTypeSelector(this.data);
                if(this.data.has("XML1")) {
                    const sum = [];
                    this.strategies.forEach(s => { const r = s.analyze(this.data); this.results.set(s.id, r); sum.push({key: s.id, count: r.count, text: s.title}); });
                    const x1 = this.data.get("XML1").records, c = new Set(); let min='', max='';
                    x1.forEach(r => { if(r.MA_CSKCB) c.add(r.MA_CSKCB); if(r.NGAY_RA) { if(!min||r.NGAY_RA<min) min=r.NGAY_RA; if(!max||r.NGAY_RA>max) max=r.NGAY_RA; } });
                    this.meta = { maCskcb: Array.from(c).join(', '), minDate: min, maxDate: max };
                    this.ui.displayAnalysisSummary(sum, { maCskcb: this.meta.maCskcb, minDate: Utils.formatDisplayDate(min), maxDate: Utils.formatDisplayDate(max) });
                    this.ui.populateAnalysisSelector(sum);
                    this.ui.displayMessage(this.ui.els.table, `Đã xử lý ${res.processedCount} file.`, 'info');
                } else this.ui.displayMessage(this.ui.els.table, "Không tìm thấy XML1.", "error");
            } catch(e) { console.error(e); this.ui.displayMessage(this.ui.els.table, "Lỗi xử lý.", "error"); }
            this.ui.hideProgress(); this.ui.resetFileInput();
        }, 10);
    }
    handleAnalysis(e) {
        const r = this.results.get(e.target.value);
        if(!r) { this.view=null; this.ui.toggleExportButton(false); return; }
        this.ui.renderTable(r.records, r.displayDefinition, this.ui.els.res);
        this.view = { recs: r.records, def: r.displayDefinition, name: r.id };
        this.ui.toggleExportButton(true);
    }
    handleType(e) {
        const d = this.data.get(e.target.value);
        if(!d) { this.view=null; this.ui.toggleExportButton(false); return; }
        this.ui.renderTable(d.records, d.definition, this.ui.els.table);
        this.view = { recs: d.records, def: d.definition, name: e.target.value };
        this.ui.toggleExportButton(true);
    }
    handleExport() {
        if(!this.view) return;
        let fn = this.view.name.replace(/[^a-zA-Z0-9]/g, '_');
        if(this.meta.maCskcb) fn += `_${this.meta.maCskcb.replace(/[^a-zA-Z0-9]/g, '')}`;
        fn += `_${this.meta.minDate.substring(0,8)||'export'}`;
        ExcelService.exportToXlsx(this.view.recs, this.view.def, fn);
    }
}

document.addEventListener('DOMContentLoaded', () => { new App().init(); });
