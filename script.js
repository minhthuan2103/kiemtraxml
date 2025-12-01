
/**
 * XML Viewer Bundle
 * Combined logic from constants, utils, xmlProcessor, uiManager, and app
 */

// --- Constants ---
const XML_DEFINITIONS = {
    "XML1": {
        displayName: "XML1. Chỉ tiêu tổng hợp khám bệnh, chữa bệnh",
        innerXmlRootTag: "TONG_HOP",
        recordTag: "TONG_HOP",
        isSingleRecord: true,
        fields: ["MA_LK", "STT", "MA_BN", "HO_TEN", "SO_CCCD", "NGAY_SINH", "GIOI_TINH", "NHOM_MAU", "MA_QUOCTICH", "MA_DANTOC", "MA_NGHE_NGHIEP", "DIA_CHI", "MATINH_CU_TRU", "MAHUYEN_CU_TRU", "MAXA_CU_TRU", "DIEN_THOAI", "MA_THE_BHYT", "MA_DKBD", "GT_THE_TU", "GT_THE_DEN", "NGAY_MIEN_CCT", "LY_DO_VV", "LY_DO_VNT", "MA_LY_DO_VNT", "CHAN_DOAN_VAO", "CHAN_DOAN_RV", "MA_BENH_CHINH", "MA_BENH_KT", "MA_BENH_YHCT", "MA_PTTT_QT", "MA_DOITUONG_KCB", "MA_NOI_DI", "MA_NOI_DEN", "MA_TAI_NAN", "NGAY_VAO", "NGAY_VAO_NOI_TRU", "NGAY_RA", "GIAY_CHUYEN_TUYEN", "SO_NGAY_DTRI", "PP_DIEU_TRI", "KET_QUA_DTRI", "MA_LOAI_RV", "GHI_CHU", "NGAY_TTOAN", "T_THUOC", "T_VTYT", "T_TONGCHI_BV", "T_TONGCHI_BH", "T_BNTT", "T_BNCCT", "T_BHTT", "T_BHTT_GDV", "T_NGUONKHAC", "NAM_QT", "THANG_QT", "MA_LOAI_KCB", "MA_KHOA", "MA_CSKCB", "MA_KHUVUC", "CAN_NANG", "CAN_NANG_CON", "NAM_NAM_LIEN_TUC", "NGAY_TAI_KHAM", "MA_HSBA", "MA_TTDV", "DU_PHONG"]
    },
    "XML2": {
        displayName: "XML2. Chỉ tiêu chi tiết thuốc",
        innerXmlRootTag: "CHITIEU_CHITIET_THUOC",
        recordParentTag: "DSACH_CHI_TIET_THUOC",
        recordTag: "CHI_TIET_THUOC",
        fields: ["MA_LK", "STT", "MA_THUOC", "MA_PP_CHEBIEN", "MA_CSKCB_THUOC", "MA_NHOM", "TEN_THUOC", "DON_VI_TINH", "HAM_LUONG", "DUONG_DUNG", "DANG_BAO_CHE", "LIEU_DUNG", "CACH_DUNG", "SO_DANG_KY", "TT_THAU", "PHAM_VI", "TYLE_TT_BH", "SO_LUONG", "DON_GIA", "THANH_TIEN_BV", "THANH_TIEN_BH", "T_NGUONKHAC_NSNN", "T_NGUONKHAC_VTNN", "T_NGUONKHAC_VTTN", "T_NGUONKHAC_CL", "T_NGUONKHAC", "MUC_HUONG", "T_BNTT", "T_BNCCT", "T_BHTT", "MA_KHOA", "MA_BAC_SI", "MA_DICH_VU", "NGAY_YL", "NGAY_TH_YL", "MA_PTTT", "NGUON_CTRA", "VET_THUONG_TP", "DU_PHONG"]
    },
    "XML3": {
        displayName: "XML3. Chỉ tiêu chi tiết DVKT VTYT",
        innerXmlRootTag: "CHITIEU_CHITIET_DVKT_VTYT",
        recordParentTag: "DSACH_CHI_TIET_DVKT",
        recordTag: "CHI_TIET_DVKT",
        fields: ["MA_LK", "STT", "MA_DICH_VU", "MA_PTTT_QT", "MA_VAT_TU", "MA_NHOM", "GOI_VTYT", "TEN_VAT_TU", "TEN_DICH_VU", "MA_XANG_DAU", "DON_VI_TINH", "PHAM_VI", "SO_LUONG", "DON_GIA_BV", "DON_GIA_BH", "TT_THAU", "TYLE_TT_DV", "TYLE_TT_BH", "THANH_TIEN_BV", "THANH_TIEN_BH", "T_TRANTT", "MUC_HUONG", "T_NGUONKHAC_NSNN", "T_NGUONKHAC_VTNN", "T_NGUONKHAC_VTTN", "T_NGUONKHAC_CL", "T_NGUONKHAC", "T_BNTT", "T_BNCCT", "T_BHTT", "MA_KHOA", "MA_GIUONG", "MA_BAC_SI", "NGUOI_THUC_HIEN", "MA_BENH", "MA_BENH_YHCT", "NGAY_YL", "NGAY_TH_YL", "NGAY_KQ", "MA_PTTT", "VET_THUONG_TP", "PP_VO_CAM", "VI_TRI_TH_DVKT", "MA_MAY", "MA_HIEU_SP", "TAI_SU_DUNG", "DU_PHONG"]
    },
    "XML4": {
        displayName: "XML4. Chỉ tiêu chi tiết dịch vụ cận lâm sàng",
        innerXmlRootTag: "CHITIEU_CHITIET_DICHVUCANLAMSANG",
        recordParentTag: "DSACH_CHI_TIET_CLS",
        recordTag: "CHI_TIET_CLS",
        fields: ["MA_LK", "STT", "MA_DICH_VU", "MA_CHI_SO", "TEN_CHI_SO", "GIA_TRI", "DON_VI_DO", "MO_TA", "KET_LUAN", "NGAY_KQ", "MA_BS_DOC_KQ", "DU_PHONG"]
    },
    "XML5": {
        displayName: "XML5. Chỉ tiêu chi tiết diễn biến lâm sàng",
        innerXmlRootTag: "CHITIEU_CHITIET_DIENBIENLAMSANG",
        recordParentTag: "DSACH_CHI_TIET_DIEN_BIEN_BENH",
        recordTag: "CHI_TIET_DIEN_BIEN_BENH",
        fields: ["MA_LK", "STT", "DIEN_BIEN_LS", "GIAI_DOAN_BENH", "HOI_CHAN", "PHAU_THUAT", "THOI_DIEM_DBLS", "NGUOI_THUC_HIEN", "DU_PHONG"]
    },
    "XML6": {
        displayName: "XML6. Chỉ tiêu hồ sơ bệnh án chăm sóc và điều trị HIV/AIDS",
        innerXmlRootTag: "CHI_TIEU_HO_SO_BENH_AN_CHAM_SOC_VA_DIEU_TRI_HIV_AIDS",
        recordParentTag: "DSACH_HO_SO_BENH_AN_CHAM_SOC_VA_DIEU_TRI_HIV_AIDS",
        recordTag: "HO_SO_BENH_AN_CHAM_SOC_VA_DIEU_TRI_HIV_AIDS",
        fields: ["MA_LK", "MA_THE_BHYT", "SO_CCCD", "NGAY_SINH", "GIOI_TINH", "DIA_CHI", "MATINH_CU_TRU", "MAHUYEN_CU_TRU", "MAXA_CU_TRU", "NGAYKD_HIV", "NOI_LAY_MAU_XN", "NOI_XN_KD", "NOI_BDDT_ARV", "BDDT_ARV", "MA_PHAC_DO_DIEU_TRI_BD", "MA_BAC_PHAC_DO_BD", "MA_LYDO_DTRI", "LOAI_DTRI_LAO", "SANG_LOC_LAO", "PHACDO_DTRI_LAO", "NGAYBD_DTRI_LAO", "NGAYKT_DTRI_LAO", "KQ_DTRI_LAO", "MA_LYDO_XNTL_VR", "NGAY_XN_TLVR", "KQ_XNTL_VR", "NGAY_KQ_XN_TLVR", "MA_LOAI_BN", "GIAI_DOAN_LAM_SANG", "NHOM_DOI_TUONG", "MA_TINH_TRANG_DK", "LAN_XN_PCR", "NGAY_XN_PCR", "NGAY_KQ_XN_PCR", "MA_KQ_XN_PCR", "NGAY_NHAN_TT_MANG_THAI", "NGAY_BAT_DAU_DT_CTX", "MA_XU_TRI", "NGAY_BAT_DAU_XU_TRI", "NGAY_KET_THUC_XU_TRI", "MA_PHAC_DO_DIEU_TRI", "MA_BAC_PHAC_DO", "SO_NGAY_CAP_THUOC_ARV", "NGAY_CHUYEN_PHAC_DO", "LY_DO_CHUYEN_PHAC_DO", "MA_CSKCB", "DU_PHONG"]
    },
    "XML7": {
        displayName: "XML7. Chỉ tiêu dữ liệu giấy ra viện",
        innerXmlRootTag: "CHI_TIEU_DU_LIEU_GIAY_RA_VIEN",
        recordTag: "CHI_TIEU_DU_LIEU_GIAY_RA_VIEN",
        isSingleRecord: true,
        fields: ["MA_LK", "SO_LUU_TRU", "MA_YTE", "MA_KHOA_RV", "NGAY_VAO", "NGAY_RA", "MA_DINH_CHI_THAI", "NGUYENNHAN_DINHCHI", "THOIGIAN_DINHCHI", "TUOI_THAI", "CHAN_DOAN_RV", "PP_DIEUTRI", "GHI_CHU", "MA_TTDV", "MA_BS", "TEN_BS", "NGAY_CT", "MA_CHA", "MA_ME", "MA_THE_TAM", "HO_TEN_CHA", "HO_TEN_ME", "SO_NGAY_NGHI", "NGOAITRU_TUNGAY", "NGOAITRU_DENNGAY", "DU_PHONG"]
    },
    "XML8": {
        displayName: "XML8. Chỉ tiêu dữ liệu tóm tắt hồ sơ bệnh án",
        innerXmlRootTag: "CHI_TIEU_DU_LIEU_TOM_TAT_HO_SO_BENH_AN",
        recordTag: "CHI_TIEU_DU_LIEU_TOM_TAT_HO_SO_BENH_AN",
        isSingleRecord: true,
        fields: ["MA_LK", "MA_LOAI_KCB", "HO_TEN_CHA", "HO_TEN_ME", "NGUOI_GIAM_HO", "DON_VI", "NGAY_VAO", "NGAY_RA", "CHAN_DOAN_VAO", "CHAN_DOAN_RV", "QT_BENHLY", "TOMTAT_KQ", "PP_DIEUTRI", "NGAY_SINHCON", "NGAY_CONCHET", "SO_CONCHET", "KET_QUA_DTRI", "GHI_CHU", "MA_TTDV", "NGAY_CT", "MA_THE_TAM", "DU_PHONG"]
    },
    "XML9": {
        displayName: "XML9. Chỉ tiêu dữ liệu giấy chứng sinh",
        innerXmlRootTag: "CHI_TIEU_DU_LIEU_GIAY_CHUNG_SINH",
        recordParentTag: "DSACH_GIAYCHUNGSINH",
        recordTag: "DU_LIEU_GIAY_CHUNG_SINH",
        fields: ["MA_LK", "MA_BHXH_NND", "MA_THE_NND", "HO_TEN_NND", "NGAYSINH_NND", "MA_DANTOC_NND", "SO_CCCD_NND", "NGAYCAP_CCCD_NND", "NOICAP_CCCD_NND", "NOI_CU_TRU_NND", "MA_QUOCTICH", "MATINH_CU_TRU", "MAHUYEN_CU_TRU", "MAXA_CU_TRU", "HO_TEN_CHA", "MA_THE_TAM", "HO_TEN_CON", "GIOI_TINH_CON", "SO_CON", "LAN_SINH", "SO_CON_SONG", "CAN_NANG_CON", "NGAY_SINH_CON", "NOI_SINH_CON", "TINH_TRANG_CON", "SINHCON_PHAUTHUAT", "SINHCON_DUOI32TUAN", "GHI_CHU", "NGUOI_DO_DE", "NGUOI_GHI_PHIEU", "NGAY_CT", "SO", "QUYEN_SO", "MA_TTDV", "DU_PHONG"]
    },
    "XML10": {
        displayName: "XML10. Chỉ tiêu dữ liệu giấy chứng nhận nghỉ dưỡng thai",
        innerXmlRootTag: "CHI_TIEU_DU_LIEU_GIAY_NGHI_DUONG_THAI",
        recordTag: "CHI_TIEU_DU_LIEU_GIAY_NGHI_DUONG_THAI",
        isSingleRecord: true,
        fields: ["MA_LK", "SO_SERI", "SO_CT", "SO_NGAY", "DON_VI", "CHAN_DOAN_RV", "TU_NGAY", "DEN_NGAY", "MA_TTDV", "TEN_BS", "MA_BS", "NGAY_CT", "DU_PHONG"]
    },
    "XML11": {
        displayName: "XML11. Chỉ tiêu dữ liệu giấy chứng nhận nghỉ hưởng BHXH",
        innerXmlRootTag: "CHI_TIEU_DU_LIEU_GIAY_CHUNG_NHAN_NGHI_VIEC_HUONG_BAO_HIEM_XA_HOI",
        recordTag: "CHI_TIEU_DU_LIEU_GIAY_CHUNG_NHAN_NGHI_VIEC_HUONG_BAO_HIEM_XA_HOI",
        isSingleRecord: true,
        fields: ["MA_LK", "SO_CT", "SO_SERI", "SO_KCB", "DON_VI", "MA_BHXH", "MA_THE_BHYT", "CHAN_DOAN_RV", "PP_DIEUTRI", "MA_DINH_CHI_THAI", "NGUYENNHAN_DINHCHI", "TUOI_THAI", "SO_NGAY_NGHI", "TU_NGAY", "DEN_NGAY", "HO_TEN_CHA", "HO_TEN_ME", "MA_TTDV", "MA_BS", "NGAY_CT", "MA_THE_TAM", "MAU_SO", "DU_PHONG"]
    },
    "XML13": {
        displayName: "XML13. Chỉ tiêu dữ liệu giấy chuyển tuyến",
        innerXmlRootTag: "CHI_TIEU_GIAYCHUYENTUYEN",
        recordTag: "CHI_TIEU_GIAYCHUYENTUYEN",
        isSingleRecord: true,
        fields: ["MA_LK", "SO_HOSO", "SO_CHUYENTUYEN", "GIAY_CHUYEN_TUYEN", "MA_CSKCB", "MA_NOI_DI", "MA_NOI_DEN", "HO_TEN", "NGAY_SINH", "GIOI_TINH", "MA_QUOCTICH", "MA_DANTOC", "MA_NGHE_NGHIEP", "DIA_CHI", "MA_THE_BHYT", "GT_THE_DEN", "NGAY_VAO", "NGAY_VAO_NOI_TRU", "NGAY_RA", "DAU_HIEU_LS", "CHAN_DOAN_RV", "QT_BENHLY", "TOMTAT_KQ", "PP_DIEUTRI", "MA_BENH_CHINH", "MA_BENH_KT", "MA_BENH_YHCT", "TEN_DICH_VU", "TEN_THUOC", "MA_LOAI_RV", "MA_LYDO_CT", "HUONG_DIEU_TRI", "PHUONGTIEN_VC", "HOTEN_NGUOI_HT", "CHUCDANH_NGUOI_HT", "MA_BAC_SI", "MA_TTDV", "DU_PHONG"]
    },
    "XML14": {
        displayName: "XML14. Chỉ tiêu dữ liệu giấy hẹn khám lại",
        innerXmlRootTag: "CHI_TIEU_GIAYHEN_KHAMLAI",
        recordTag: "CHI_TIEU_GIAYHEN_KHAMLAI",
        isSingleRecord: true,
        fields: ["MA_LK", "SO_GIAYHEN_KL", "MA_CSKCB", "HO_TEN", "NGAY_SINH", "GIOI_TINH", "DIA_CHI", "MA_THE_BHYT", "GT_THE_DEN", "NGAY_VAO", "NGAY_VAO_NOI_TRU", "NGAY_RA", "NGAY_HEN_KL", "CHAN_DOAN_RV", "MA_BENH_CHINH", "MA_BENH_KT", "MA_BENH_YHCT", "MA_DOITUONG_KCB", "MA_BAC_SI", "MA_TTDV", "NGAY_CT", "DU_PHONG"]
    },
    "XML15": {
        displayName: "XML15. Chỉ tiêu dữ liệu chi tiết điều trị bệnh lao",
        innerXmlRootTag: "CHI_TIEU_DIEUTRI_BENHLAO",
        recordParentTag: "DSACH_CHITIET_DIEUTRI_BENHLAO",
        recordTag: "CHITIET_DIEUTRI_BENHLAO",
        fields: ["MA_LK", "STT", "MA_BN", "HO_TEN", "SO_CCCD", "PHANLOAI_LAO_VITRI", "PHANLOAI_LAO_TS", "PHANLOAI_LAO_HIV", "PHANLOAI_LAO_VK", "PHANLOAI_LAO_KT", "LOAI_DTRI_LAO", "NGAYBD_DTRI_LAO", "PHACDO_DTRI_LAO", "NGAYKT_DTRI_LAO", "KET_QUA_DTRI_LAO", "MA_CSKCB", "NGAYKD_HIV", "BDDT_ARV", "NGAY_BAT_DAU_DT_CTX", "DU_PHONG"]
    }
};

const MA_LOAI_KCB_MAP = {
    '01': 'Khám bệnh',
    '02': 'Điều trị ngoại trú',
    '03': 'Điều trị nội trú',
    '04': 'Điều trị nội trú ban ngày',
    '05': 'Điều trị ngoại trú bệnh mạn tính (có khám bệnh và lĩnh thuốc)',
    '06': 'Điều trị lưu tại Trạm Y tế tuyến xã, Phòng khám đa khoa khu vực',
    '07': 'Nhận thuốc theo hẹn (không khám bệnh)',
    '08': 'Điều trị ngoại trú bệnh mạn tính (có KCB, DVKT/thuốc)',
    '09': 'Điều trị nội trú dưới 04 giờ',
    '10': 'Các trường hợp khác'
};

// --- Utils ---
const Utils = {
    base64ToUtf8(str) {
        try {
            const binaryString = atob(str);
            const charCodes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                charCodes[i] = binaryString.charCodeAt(i);
            }
            return new TextDecoder().decode(charCodes);
        } catch (e) {
            console.error("Error in base64ToUtf8:", e);
            throw e; 
        }
    },

    parseXmlDateTime(dateTimeStr) {
        if (!dateTimeStr || typeof dateTimeStr !== 'string') return null;

        const year = parseInt(dateTimeStr.substring(0, 4), 10);
        const month = parseInt(dateTimeStr.substring(4, 6), 10) - 1; // Month is 0-indexed
        const day = parseInt(dateTimeStr.substring(6, 8), 10);
        
        let hour = 0, minute = 0, second = 0;
        if (dateTimeStr.length >= 10) hour = parseInt(dateTimeStr.substring(8, 10), 10);
        if (dateTimeStr.length >= 12) minute = parseInt(dateTimeStr.substring(10, 12), 10);
        if (dateTimeStr.length >= 14) second = parseInt(dateTimeStr.substring(12, 14), 10);

        if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hour) || isNaN(minute) || isNaN(second)) {
            return null;
        }
        return new Date(year, month, day, hour, minute, second);
    },

    formatDisplayDate(xmlDateStr) {
        const date = this.parseXmlDateTime(xmlDateStr);
        if (!date) return '';
        
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        // Show time if the original string contained time information (length > 8)
        if (xmlDateStr && xmlDateStr.length > 8) {
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return `${day}/${month}/${year} ${hours}:${minutes}`;
        }
        
        return `${day}/${month}/${year}`;
    },

    isOutsideWorkingHours(date) {
        if (!date) return false;

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const totalMinutes = hours * 60 + minutes;

        // Working hours: 7:00-11:30 and 13:30-17:00
        const morningStart = 7 * 60; // 420
        const morningEnd = 11 * 60 + 30; // 690
        const afternoonStart = 13 * 60 + 30; // 810
        const afternoonEnd = 17 * 60; // 1020

        const isInWorkingHours = 
            (totalMinutes >= morningStart && totalMinutes <= morningEnd) ||
            (totalMinutes >= afternoonStart && totalMinutes <= afternoonEnd);
            
        return !isInWorkingHours;
    }
};

// --- XmlProcessor ---
const XmlProcessor = {
    extractRecordsFromInnerXml(decodedXmlString, definition) {
        const parser = new DOMParser();
        const innerXmlDoc = parser.parseFromString(decodedXmlString, "application/xml");
        const extractedRecords = [];

        if (innerXmlDoc.getElementsByTagName("parsererror").length > 0) {
            console.error(`Parser error in inner XML for ${definition.displayName}.`);
            return [];
        }

        let recordsInThisDoc = [];
        if (definition.isSingleRecord) {
            const recordNode = innerXmlDoc.getElementsByTagName(definition.recordTag)[0];
            if (recordNode) recordsInThisDoc.push(recordNode);
        } else {
            let listContainer = innerXmlDoc.getElementsByTagName(definition.innerXmlRootTag)[0];
            if (definition.recordParentTag && listContainer) {
                listContainer = listContainer.getElementsByTagName(definition.recordParentTag)[0];
            }
            if (listContainer) {
                const actualRecords = listContainer.getElementsByTagName(definition.recordTag);
                for (let i = 0; i < actualRecords.length; i++) {
                    recordsInThisDoc.push(actualRecords[i]);
                }
            }
        }

        recordsInThisDoc.forEach(recordNode => {
            const record = {};
            definition.fields.forEach(fieldName => {
                const fieldElement = recordNode.getElementsByTagName(fieldName)[0];
                record[fieldName] = fieldElement?.textContent?.trim() || '';
            });
            extractedRecords.push(record);
        });
        return extractedRecords;
    },

    async processAndGroupXmlFiles(files, onProgress) {
        const groupedRecords = new Map();
        let invalidFileCount = 0;
        const totalFiles = files.length;

        const fileReadPromises = files.map(file => 
            new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => resolve({ name: file.name, content: e.target?.result });
                reader.onerror = () => {
                    console.error(`Lỗi đọc file: ${file.name}`);
                    resolve({ name: file.name, content: null });
                };
                reader.readAsText(file);
            })
        );
        
        const fileResults = await Promise.all(fileReadPromises);
        
        let processedFileCount = 0;
        for (const fileResult of fileResults) {
            const { name, content } = fileResult;

            if (content === null) {
                invalidFileCount++;
            } else {
                const parser = new DOMParser();
                const mainXmlDoc = parser.parseFromString(content, "application/xml");

                if (mainXmlDoc.getElementsByTagName("parsererror").length > 0) {
                    console.warn(`File XML không hợp lệ '${name}' đã bị bỏ qua.`);
                    invalidFileCount++;
                } else {
                    const fileHosoElements = mainXmlDoc.getElementsByTagName('FILEHOSO');
                    for (let i = 0; i < fileHosoElements.length; i++) {
                        const fileHoso = fileHosoElements[i];
                        const loaiHoSoEl = fileHoso.getElementsByTagName('LOAIHOSO')[0];
                        const noiDungFileEl = fileHoso.getElementsByTagName('NOIDUNGFILE')[0];

                        if (loaiHoSoEl && noiDungFileEl) {
                            const loaiHoSo = loaiHoSoEl.textContent?.trim();
                            let innerXmlString = '';

                            if (noiDungFileEl.firstElementChild) {
                                innerXmlString = noiDungFileEl.innerHTML.trim();
                            } else {
                                const base64ContentDirty = noiDungFileEl.textContent;
                                if (base64ContentDirty) {
                                    const base64Content = base64ContentDirty.replace(/[^A-Za-z0-9+/=]/g, '');
                                    try {
                                        innerXmlString = Utils.base64ToUtf8(base64Content);
                                    } catch (e) {
                                        console.warn(`Lỗi giải mã Base64 cho ${loaiHoSo} trong file ${name}.`, e);
                                        innerXmlString = '';
                                    }
                                }
                            }

                            if (loaiHoSo && innerXmlString && XML_DEFINITIONS[loaiHoSo]) {
                                const definition = XML_DEFINITIONS[loaiHoSo];
                                const newRecords = this.extractRecordsFromInnerXml(innerXmlString, definition);

                                if (newRecords.length > 0) {
                                     if (!groupedRecords.has(loaiHoSo)) {
                                        groupedRecords.set(loaiHoSo, {
                                            definition: definition,
                                            records: []
                                        });
                                    }
                                    groupedRecords.get(loaiHoSo).records.push(...newRecords);
                                }
                            }
                        }
                    }
                }
            }
            processedFileCount++;
            onProgress({ processed: processedFileCount, total: totalFiles });
        }
        
        return { groupedRecords, processedCount: files.length - invalidFileCount, invalidFileCount };
    },
};

// --- UIManager ---
const DATE_FIELDS = new Set([
    "NGAY_SINH", "GT_THE_TU", "GT_THE_DEN", "NGAY_MIEN_CCT", "NGAY_VAO", "NGAY_VAO_NOI_TRU", 
    "NGAY_RA", "NGAY_TTOAN", "NGAY_TAI_KHAM", "NGAY_YL", "NGAY_TH_YL", "NGAY_KQ", "NGAYKD_HIV", 
    "NGAYBD_DTRI_LAO", "NGAYKT_DTRI_LAO", "NGAY_XN_TLVR", "NGAY_KQ_XN_TLVR", "NGAY_XN_PCR", 
    "NGAY_KQ_XN_PCR", "NGAY_NHAN_TT_MANG_THAI", "NGAY_BAT_DAU_DT_CTX", "NGAY_BAT_DAU_XU_TRI", 
    "NGAY_KET_THUC_XU_TRI", "NGAY_CHUYEN_PHAC_DO", "NGAY_CT", "NGAY_SINHCON", "NGAY_CONCHET", 
    "NGOAITRU_TUNGAY", "NGOAITRU_DENNGAY", "NGAYCAP_CCCD_NND", "NGAY_SINH_CON", "TU_NGAY", "DEN_NGAY", "NGAY_HEN_KL",
    "XML2_NGAY_YL_MIN", "NGAY_CHI_DINH", "NGAY_CHECK"
]);

const NUMERIC_FIELDS = new Set([
    "SO_LUONG", "DON_GIA", "DON_GIA_BV", "DON_GIA_BH", "T_BHTT", "THANH_TIEN_BV", "THANH_TIEN_BH", "T_THUOC", 
    "T_VTYT", "T_TONGCHI_BV", "T_TONGCHI_BH", "T_BNTT", "T_BNCCT", "T_BHTT_GDV", "T_NGUONKHAC", "THOI_GIAN_TH_KQ_PHUT"
]);

class UIManager {
    constructor() {
        this.fileInput = document.getElementById('xmlFileInput');
        this.typeSelector = document.getElementById('xmlTypeSelector');
        this.dataTableContainer = document.getElementById('dataTableContainer');
        this.analysisResultContainer = document.getElementById('analysisResultContainer');
        this.progressContainer = document.getElementById('progressContainer');
        this.progressBar = document.getElementById('progressBar');
        this.progressLabel = document.getElementById('progressLabel');
        this.exportXlsxButton = document.getElementById('exportXlsxButton');
        
        this.analysisSummaryContainer = document.getElementById('analysisSummaryContainer');
        this.analysisSelectorContainer = document.getElementById('analysisSelectorContainer');
        this.analysisTypeSelector = document.getElementById('analysisTypeSelector');

        this.helpButton = document.getElementById('helpButton');
        this.helpModal = document.getElementById('helpModal');
        this.closeHelpModal = document.getElementById('closeHelpModal');

        this.currentTableElement = null;
        this.currentTableRecords = [];
        this.currentTableDefinition = null;
        this.currentSortKey = null;
        this.currentSortDirection = 'asc';

        // Pagination State
        this.currentPage = 1;
        this.pageSize = 5; 
        this.paginationContainer = null;
    }

    addEventListeners(handlers) {
        this.fileInput.addEventListener('change', handlers.onFileChange);
        this.typeSelector.addEventListener('change', handlers.onTypeSelect);
        this.analysisTypeSelector.addEventListener('change', handlers.onAnalysisSelect);
        this.exportXlsxButton.addEventListener('click', handlers.onExportClick);

        if (this.helpButton && this.helpModal && this.closeHelpModal) {
            this.helpButton.addEventListener('click', () => {
                this.helpModal.style.display = "block";
            });
            
            this.closeHelpModal.addEventListener('click', () => {
                this.helpModal.style.display = "none";
            });
            
            window.addEventListener('click', (event) => {
                if (event.target === this.helpModal) {
                    this.helpModal.style.display = "none";
                }
            });
        }
    }

    displayMessage(container, message, type = 'info') {
        const holdingPen = document.getElementById('buttonHoldingPen');
        if (holdingPen && !holdingPen.contains(this.exportXlsxButton)) {
            holdingPen.appendChild(this.exportXlsxButton);
        }
        this.exportXlsxButton.hidden = true; 

        container.innerHTML = `<p class="${type}-message">${message}</p>`;
        this.currentTableElement = null;
        this.paginationContainer = null;
    }
    
    resetAnalysisView() {
        this.analysisSummaryContainer.innerHTML = '';
        this.displayMessage(this.analysisResultContainer, 'Kết quả phân tích sẽ được hiển thị ở đây.');
        this.analysisSelectorContainer.hidden = true;
        this.analysisTypeSelector.innerHTML = '<option value="">-- Chờ kết quả phân tích --</option>';
        this.analysisTypeSelector.value = '';
    }
    
    displayAnalysisSummary(summaryItems, metadata) {
        const totalIssues = summaryItems.reduce((sum, item) => sum + item.count, 0);

        if (totalIssues === 0) {
            this.displayMessage(this.analysisResultContainer, "Phân tích hoàn tất. Không tìm thấy vấn đề nào trong phạm vi kiểm tra.", "success");
            return;
        }

        let summaryHtml = `<h3 class="visible-heading">Báo cáo tổng hợp kết quả phân tích</h3>`;
        
        if (metadata) {
            summaryHtml += `
            <div style="margin-bottom: 1.5rem; padding: 1rem; background-color: var(--background-color); border: 1px solid var(--border-color); border-radius: 6px;">
                <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                    <div><strong>Mã cơ sở KCB:</strong> ${metadata.maCskcb}</div>
                    <div><strong>Thời gian kiểm tra:</strong> ${metadata.minDate} - ${metadata.maxDate}</div>
                </div>
            </div>
            `;
        }
        
        summaryHtml += `
        <table>
            <thead>
                <tr>
                    <th style="width: 50px; text-align: center;">STT</th>
                    <th>Nội dung kiểm tra</th>
                    <th style="width: 150px; text-align: center;">Số lượng</th>
                </tr>
            </thead>
            <tbody>
        `;

        summaryItems.forEach((item, index) => {
            const countStyle = item.count > 0 ? 'color: var(--error-text-color); font-weight: bold;' : 'color: var(--success-color);';
            summaryHtml += `
                <tr>
                    <td style="text-align: center;">${index + 1}</td>
                    <td>${item.text}</td>
                    <td style="text-align: center; ${countStyle}">${item.count}</td>
                </tr>
            `;
        });

        summaryHtml += `
            </tbody>
        </table>
        <p style="margin-top: 1rem; color: var(--text-color-light);"><em>* Chọn một mục từ menu thả xuống bên dưới để xem chi tiết từng nhóm lỗi.</em></p>
        `;

        this.analysisSummaryContainer.innerHTML = summaryHtml;
    }
    
    populateAnalysisSelector(analysisItems) {
        const validItems = analysisItems.filter(item => item.count > 0);

        if (validItems.length === 0) {
            this.analysisSelectorContainer.hidden = true;
            return;
        }

        this.analysisTypeSelector.innerHTML = '<option value="">-- Chọn một phân tích để xem chi tiết --</option>';
        validItems.forEach(item => {
            const option = document.createElement('option');
            option.value = item.key;
            option.textContent = `${item.text} (${item.count})`;
            this.analysisTypeSelector.appendChild(option);
        });

        this.analysisSelectorContainer.hidden = false;
    }


    populateTypeSelector(data) {
        this.typeSelector.innerHTML = '<option value="">-- Vui lòng chọn file XML trước --</option>';
        if (data.size > 0) {
            const sortedKeys = Array.from(data.keys()).sort((a, b) => {
                const numA = parseInt(a.replace('XML', ''), 10);
                const numB = parseInt(b.replace('XML', ''), 10);
                return numA - numB;
            });

            this.typeSelector.innerHTML = '<option value="">-- Chọn loại dữ liệu để hiển thị --</option>';
            sortedKeys.forEach(key => {
                const definition = data.get(key).definition;
                const option = document.createElement('option');
                option.value = key;
                option.textContent = definition.displayName;
                this.typeSelector.appendChild(option);
            });
        }
    }

    _sortRecords(records, key, direction) {
        const isNumeric = NUMERIC_FIELDS.has(key);
        const isDate = DATE_FIELDS.has(key);
    
        return [...records].sort((a, b) => {
            const valA = a[key] || '';
            const valB = b[key] || '';
            let comparison = 0;
    
            if (isNumeric) {
                const numA = parseFloat(valA);
                const numB = parseFloat(valB);
                comparison = (isNaN(numA) ? -Infinity : numA) - (isNaN(numB) ? -Infinity : numB);
            } else if (isDate) {
                const dateA = Utils.parseXmlDateTime(valA)?.getTime() || 0;
                const dateB = Utils.parseXmlDateTime(valB)?.getTime() || 0;
                comparison = dateA - dateB;
            } else {
                comparison = valA.localeCompare(valB, 'vi', { sensitivity: 'base' });
            }
    
            return direction === 'asc' ? comparison : -comparison;
        });
    }

    _handleSort(event) {
        const target = event.target;
        const header = target.closest('th');
        if (!header || !this.currentTableRecords) return;
    
        const sortKey = header.dataset.column;
        if (!sortKey || sortKey === 'STT') return;
    
        if (this.currentSortKey === sortKey) {
            this.currentSortDirection = this.currentSortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.currentSortKey = sortKey;
            this.currentSortDirection = 'asc';
        }
        
        // Reset to page 1 when sorting changes
        this.currentPage = 1;
        this._updateTableContent();
    }

    _updateTableContent() {
        if (!this.currentTableElement || !this.currentTableRecords || !this.currentTableDefinition) return;
    
        const thead = this.currentTableElement.querySelector('thead');
        const tbody = this.currentTableElement.querySelector('tbody');
        if (!tbody || !thead) return;
    
        // Update header classes for sort indicators
        thead.querySelectorAll('th').forEach(th => {
            th.classList.remove('sorted-asc', 'sorted-desc');
            if (th.dataset.column === this.currentSortKey) {
                th.classList.add(this.currentSortDirection === 'asc' ? 'sorted-asc' : 'sorted-desc');
            }
        });
    
        // 1. Sort Records (Globally)
        const sortedRecords = (this.currentSortKey) 
            ? this._sortRecords(this.currentTableRecords, this.currentSortKey, this.currentSortDirection)
            : this.currentTableRecords;
        
        // 2. Paginate
        const totalRecords = sortedRecords.length;
        const totalPages = Math.ceil(totalRecords / this.pageSize);
        if (this.currentPage > totalPages && totalPages > 0) this.currentPage = totalPages;
        if (this.currentPage < 1) this.currentPage = 1;

        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = Math.min(startIndex + this.pageSize, totalRecords);
        const recordsToShow = sortedRecords.slice(startIndex, endIndex);

        // 3. Render Body
        tbody.innerHTML = ''; 
        
        recordsToShow.forEach((record, index) => {
            const tr = document.createElement('tr');
            
            // Calculate global STT
            const sttTd = document.createElement('td');
            sttTd.textContent = (startIndex + index + 1).toString();
            tr.appendChild(sttTd);
    
            this.currentTableDefinition.fields.forEach(header => {
                const td = document.createElement('td');
                let cellValue = record[header] || '';
                
                if (DATE_FIELDS.has(header)) {
                    cellValue = Utils.formatDisplayDate(cellValue);
                } else if (NUMERIC_FIELDS.has(header)) {
                    const num = parseFloat(cellValue);
                    if (!isNaN(num)) {
                        cellValue = num.toLocaleString('vi-VN');
                    }
                }
                td.textContent = cellValue;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

        // 4. Update Pagination Controls
        this._updatePaginationUI(startIndex, endIndex, totalRecords, totalPages);
    }

    _updatePaginationUI(startIndex, endIndex, totalRecords, totalPages) {
        if (!this.paginationContainer) return;

        const infoSpan = this.paginationContainer.querySelector('.pagination-info');
        const prevBtn = this.paginationContainer.querySelector('#prevPageBtn');
        const nextBtn = this.paginationContainer.querySelector('#nextPageBtn');

        if (infoSpan) {
            infoSpan.textContent = `Hiển thị ${totalRecords > 0 ? startIndex + 1 : 0} đến ${endIndex} trong số ${totalRecords} bản ghi`;
        }

        if (prevBtn) prevBtn.disabled = this.currentPage <= 1;
        if (nextBtn) nextBtn.disabled = this.currentPage >= totalPages;
    }

    _renderPaginationControls(container) {
        this.paginationContainer = document.createElement('div');
        this.paginationContainer.className = 'pagination-container';
        
        // Page Size Selector
        const leftControls = document.createElement('div');
        leftControls.className = 'page-size-selector';
        leftControls.innerHTML = `<label>Hiển thị: 
            <select id="pageSizeSelect">
                <option value="5" selected>5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="500">500</option>
            </select> dòng</label>`;
        
        const pageSizeSelect = leftControls.querySelector('#pageSizeSelect');
        pageSizeSelect.value = this.pageSize.toString();
        pageSizeSelect.addEventListener('change', (e) => {
            this.pageSize = parseInt(e.target.value, 10);
            this.currentPage = 1; // Reset to page 1
            this._updateTableContent();
        });

        // Info Text
        const infoSpan = document.createElement('span');
        infoSpan.className = 'pagination-info';
        
        // Buttons
        const rightControls = document.createElement('div');
        rightControls.className = 'pagination-controls';
        
        const prevBtn = document.createElement('button');
        prevBtn.id = 'prevPageBtn';
        prevBtn.className = 'page-btn';
        prevBtn.textContent = 'Trước';
        prevBtn.addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this._updateTableContent();
            }
        });

        const nextBtn = document.createElement('button');
        nextBtn.id = 'nextPageBtn';
        nextBtn.className = 'page-btn';
        nextBtn.textContent = 'Sau';
        nextBtn.addEventListener('click', () => {
             this.currentPage++;
             this._updateTableContent();
        });

        rightControls.appendChild(prevBtn);
        rightControls.appendChild(nextBtn);

        this.paginationContainer.appendChild(leftControls);
        this.paginationContainer.appendChild(infoSpan);
        this.paginationContainer.appendChild(rightControls);

        container.appendChild(this.paginationContainer);
    }

    renderTable(records, definition, container, showExportButton = false) {
        this.currentSortKey = null;
        this.currentSortDirection = 'asc';
        this.currentPage = 1;
        this.currentTableRecords = records;
        this.currentTableDefinition = definition;

        if (!records || records.length === 0) {
            this.displayMessage(container, `Không có dữ liệu cho: ${definition.displayName}`);
            this.currentTableElement = null;
            this.paginationContainer = null;
            return;
        }

        container.innerHTML = ''; 

        const headerDiv = document.createElement('div');
        headerDiv.className = 'table-header';
        const title = document.createElement('h3');
        title.className = 'visible-heading';
        title.textContent = definition.displayName;
        headerDiv.appendChild(title);
        if (showExportButton) {
            headerDiv.appendChild(this.exportXlsxButton);
            this.exportXlsxButton.hidden = false;
        } else {
            this.exportXlsxButton.hidden = true;
            const holdingPen = document.getElementById('buttonHoldingPen');
            if (holdingPen && !holdingPen.contains(this.exportXlsxButton)) {
                 holdingPen.appendChild(this.exportXlsxButton);
            }
        }
        container.appendChild(headerDiv);

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        
        table.appendChild(thead);
        table.appendChild(tbody);
        this.currentTableElement = table;
        container.appendChild(table);

        const headerRow = document.createElement('tr');
        thead.appendChild(headerRow);
        
        const headers = ["STT", ...definition.fields];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            if (headerText !== 'STT') {
                th.dataset.column = headerText;
            }
            headerRow.appendChild(th);
        });

        thead.addEventListener('click', this._handleSort.bind(this));

        // Create Pagination Controls
        this._renderPaginationControls(container);

        // Render Initial Content
        this._updateTableContent();
    }
    
    showProgress(total, label) {
        this.progressContainer.hidden = false;
        this.progressBar.value = 0;
        this.progressBar.max = total;
        this.progressLabel.textContent = label;
    }

    updateProgress(value, label) {
        this.progressBar.value = value;
        this.progressLabel.textContent = label;
    }

    hideProgress() {
        this.progressContainer.hidden = true;
    }
    
    resetFileInput() {
        this.fileInput.value = '';
    }

    exportTableToXlsx(filename) {
        if (!this.currentTableRecords || this.currentTableRecords.length === 0 || !this.currentTableDefinition) {
            alert("Không có dữ liệu để xuất.");
            return;
        }
    
        // Use the currently sorted records if a sort is active.
        // IMPORTANT: Export ALL sorted records, not just the current page slice!
        const recordsToExport = (this.currentSortKey)
            ? this._sortRecords(this.currentTableRecords, this.currentSortKey, this.currentSortDirection)
            : this.currentTableRecords;
    
        const headers = ["STT", ...this.currentTableDefinition.fields];
        
        const dataRows = recordsToExport.map((record, index) => {
            const row = [index + 1];
            
            this.currentTableDefinition.fields.forEach(header => {
                let cellValue = record[header] || '';
                
                if (DATE_FIELDS.has(header)) {
                    cellValue = Utils.formatDisplayDate(cellValue);
                } else if (NUMERIC_FIELDS.has(header)) {
                    const num = parseFloat(cellValue);
                    cellValue = isNaN(num) ? cellValue : num;
                }
                
                row.push(cellValue);
            });
            return row;
        });
    
        const worksheetData = [headers, ...dataRows];
        const ws = XLSX.utils.aoa_to_sheet(worksheetData);
        
        const dateColumnIndices = this.currentTableDefinition.fields
            .map((field, index) => DATE_FIELDS.has(field) ? index + 1 : -1) 
            .filter(index => index !== -1);
            
        if (dateColumnIndices.length > 0) {
            for (let r = 1; r < worksheetData.length; r++) { 
                for (const c of dateColumnIndices) { 
                    const cellAddress = XLSX.utils.encode_cell({ r: r, c: c });
                    const cell = ws[cellAddress];
                    if (cell) {
                        cell.t = 's';
                    }
                }
            }
        }

        const lyDoFieldIndex = this.currentTableDefinition.fields.indexOf('LY_DO');
        if (lyDoFieldIndex !== -1) {
            const lyDoColIndex = lyDoFieldIndex + 1;
            for (let r = 1; r < worksheetData.length; r++) {
                const cellAddress = XLSX.utils.encode_cell({ r: r, c: lyDoColIndex });
                const cell = ws[cellAddress];
                if (cell) {
                    cell.s = {
                        font: {
                            color: { rgb: "FF0000" } 
                        }
                    };
                }
            }
        }

        const colWidths = headers.map(header => ({ wch: header.length + 2 })); 

        dataRows.forEach(row => {
            row.forEach((cellValue, colIndex) => {
                const cellText = cellValue ? String(cellValue) : "";
                const len = cellText.length;
                if (len > colWidths[colIndex].wch) {
                    colWidths[colIndex].wch = len + 2; 
                }
            });
        });

        const MAX_COL_WIDTH = 100;
        colWidths.forEach(col => {
            if (col.wch > MAX_COL_WIDTH) col.wch = MAX_COL_WIDTH;
        });

        ws['!cols'] = colWidths;
    
        const wb = XLSX.utils.book_new();
        
        let sheetName = this.currentTableDefinition.displayName.replace(/[\\/?*[\]:]/g, '');
        if (sheetName.length > 31) {
            sheetName = sheetName.substring(0, 31);
        }
        if (!sheetName.trim()) {
            sheetName = "Sheet1";
        }
    
        XLSX.utils.book_append_sheet(wb, ws, sheetName);
        XLSX.writeFile(wb, `${filename}.xlsx`);
    }
}

// --- App ---
class App {
    constructor() {
        this.ui = new UIManager();
        this.processedData = new Map();
        this.outOfHoursAnalysisResults = [];
        this.executionTimeAnalysisResults = [];
        this.timeMismatchResults = [];
        this.missingMachineCodeResults = [];
        this.electroacupunctureTimeResults = [];
        this.currentView = null;
        this.metaData = { maCskcb: '', minDate: '', maxDate: '' };
    }
    
    async init() {
        this.ui.addEventListeners({
            onFileChange: this.handleFileUpload.bind(this),
            onTypeSelect: this.handleTypeSelection.bind(this),
            onAnalysisSelect: this.handleAnalysisSelection.bind(this),
            onExportClick: this.handleExport.bind(this),
        });
        this.resetApp();
    }

    resetApp() {
        this.processedData.clear();
        this.outOfHoursAnalysisResults = [];
        this.executionTimeAnalysisResults = [];
        this.timeMismatchResults = [];
        this.missingMachineCodeResults = [];
        this.electroacupunctureTimeResults = [];
        this.currentView = null;
        this.metaData = { maCskcb: '', minDate: '', maxDate: '' };

        this.ui.populateTypeSelector(this.processedData);
        this.ui.displayMessage(this.ui.dataTableContainer, 'Chưa có dữ liệu để hiển thị. Vui lòng tải lên một file XML và chọn loại dữ liệu.');
        this.ui.resetAnalysisView();
        this.ui.hideProgress();
        this.ui.exportXlsxButton.hidden = true;
    }

    async handleFileUpload(event) {
        const target = event.target;
        this.resetApp();
        this.currentView = null;
        
        if (!target.files || target.files.length === 0) {
            this.ui.displayMessage(this.ui.dataTableContainer,'Không có file nào được chọn.');
            return;
        }

        const files = Array.from(target.files);
        const totalFiles = files.length;
        this.ui.showProgress(totalFiles, `Chuẩn bị xử lý ${totalFiles} file...`);
        this.ui.displayMessage(this.ui.dataTableContainer, 'Bắt đầu quá trình xử lý file...');

        setTimeout(async () => {
            try {
                const onProgress = (progress) => {
                    this.ui.updateProgress(progress.processed, `Đang xử lý file ${progress.processed}/${progress.total}...`);
                };

                const { groupedRecords, processedCount, invalidFileCount } = await XmlProcessor.processAndGroupXmlFiles(files, onProgress);
                this.processedData = groupedRecords;

                this.ui.populateTypeSelector(this.processedData);
                this.runAnalysisAndPrepareUI();
                
                let statusMessage;
                if (this.processedData.size > 0) {
                    statusMessage = `Đã xử lý thành công ${processedCount}/${files.length} file. Vui lòng chọn loại dữ liệu từ dropdown để xem chi tiết.`;
                    if (invalidFileCount > 0) statusMessage += ` (${invalidFileCount} file không hợp lệ đã bị bỏ qua).`;
                } else {
                    statusMessage = `Không tìm thấy dữ liệu XML (loại 3.5) nào trong các file đã tải lên. Đã xử lý ${processedCount}/${files.length} file.`;
                     if (invalidFileCount > 0) statusMessage += ` (${invalidFileCount} file không hợp lệ đã bị bỏ qua).`;
                }
                 this.ui.displayMessage(this.ui.dataTableContainer, statusMessage, 'info');

            } catch (error) {
                console.error("Lỗi xử lý các file XML:", error);
                const errorMessage = error instanceof Error ? error.message : String(error);
                this.ui.displayMessage(this.ui.dataTableContainer, `Lỗi xử lý file: ${errorMessage}`, "error");
                this.resetApp();
            } finally {
                this.ui.hideProgress();
                this.ui.resetFileInput();
            }
        }, 10);
    }

    runAnalysisAndPrepareUI() {
        if (!this.processedData.size) return;
        
        const xml1Records = this.processedData.get("XML1")?.records || [];
        const xml2Records = this.processedData.get("XML2")?.records || [];
        const xml3Records = this.processedData.get("XML3")?.records || [];

        const canRunAnyAnalysis = xml1Records.length > 0;
        if (!canRunAnyAnalysis) {
            this.ui.displayMessage(this.ui.analysisResultContainer, 'Không đủ dữ liệu (thiếu XML1) để thực hiện phân tích.');
            return;
        }
        
        this.timeMismatchResults = this.analyzeTimeMismatches(xml1Records, xml2Records, xml3Records);
        this.outOfHoursAnalysisResults = this.analyzeOutOfHours(xml1Records);
        this.executionTimeAnalysisResults = this.analyzeExecutionTime(xml1Records, xml2Records, xml3Records);
        this.missingMachineCodeResults = this.analyzeMissingMachineCode(xml1Records, xml3Records);
        this.electroacupunctureTimeResults = this.analyzeElectroacupunctureTime(xml1Records, xml3Records);

        const analysisItems = [
            { key: 'timeMismatch', count: this.timeMismatchResults.length, text: 'Thời gian chỉ định/thực hiện/kết quả ngoài thời gian điều trị' },
            { key: 'outOfHours', count: this.outOfHoursAnalysisResults.length, text: 'Vào và ra viện ngoài giờ hành chính' },
            { key: 'executionTime', count: this.executionTimeAnalysisResults.length, text: 'DVKT có thời gian thực hiện dưới 5 phút' },
            { key: 'electroacupunctureTime', count: this.electroacupunctureTimeResults.length, text: 'Điện châm (08.0005.0230) dưới 20 phút' },
            { key: 'missingMachineCode', count: this.missingMachineCodeResults.length, text: 'Thiếu thông tin máy (MA_MAY)' },
        ];
        
        let minDateStr = '';
        let maxDateStr = '';
        const cskcbSet = new Set();

        xml1Records.forEach(rec => {
            const ngayRa = rec.NGAY_RA || '';
            if (ngayRa) {
                if (!minDateStr || ngayRa < minDateStr) minDateStr = ngayRa;
                if (!maxDateStr || ngayRa > maxDateStr) maxDateStr = ngayRa;
            }
            if (rec.MA_CSKCB) {
                cskcbSet.add(rec.MA_CSKCB);
            }
        });
        
        const maCskcbStr = Array.from(cskcbSet).join(', ');
        this.metaData = {
            maCskcb: maCskcbStr,
            minDate: minDateStr,
            maxDate: maxDateStr
        };

        const fmtMinDate = Utils.formatDisplayDate(minDateStr);
        const fmtMaxDate = Utils.formatDisplayDate(maxDateStr);

        this.ui.displayAnalysisSummary(analysisItems, {
            minDate: fmtMinDate,
            maxDate: fmtMaxDate,
            maCskcb: maCskcbStr
        });
        
        this.ui.populateAnalysisSelector(analysisItems);
    }
    
    handleAnalysisSelection(event) {
        const target = event.target;
        const analysisType = target.value;
        this.displayAnalysisResult(analysisType);
    }
    
    handleTypeSelection() {
        const selectedLoaiHoSo = this.ui.typeSelector.value;

        if (!selectedLoaiHoSo) {
            this.ui.displayMessage(this.ui.dataTableContainer, 'Vui lòng chọn một loại dữ liệu hợp lệ.');
            this.currentView = null;
            return;
        }

        const selectedDataGroup = this.processedData.get(selectedLoaiHoSo);
        if (!selectedDataGroup) {
            this.ui.displayMessage(this.ui.dataTableContainer, `Không tìm thấy dữ liệu cho loại: ${selectedLoaiHoSo}`, "error");
            this.currentView = null;
            return;
        }

        const { definition, records } = selectedDataGroup;
        this.currentView = { type: 'data', name: selectedLoaiHoSo, displayName: definition.displayName };
        if (records.length === 0) {
            this.ui.displayMessage(this.ui.dataTableContainer, `Không tìm thấy bản ghi nào cho loại dữ liệu: ${definition.displayName}`);
        } else {
            this.ui.renderTable(records, definition, this.ui.dataTableContainer, true);
        }
    }

    handleExport() {
        if (!this.currentView) {
            alert("Không xác định được nội dung cần xuất.");
            return;
        }

        const baseName = this.currentView.name;
        const safeBaseName = baseName.replace(/[^a-zA-Z0-9_-]/g, '_');
        
        let filename = safeBaseName;
        
        if (this.metaData.maCskcb) {
            const cleanCode = this.metaData.maCskcb.replace(/[^a-zA-Z0-9]/g, '_');
            filename += `_${cleanCode}`;
        }
        
        const start = this.metaData.minDate ? this.metaData.minDate.substring(0, 8) : '';
        const end = this.metaData.maxDate ? this.metaData.maxDate.substring(0, 8) : '';
        
        if (start) {
            filename += `_${start}`;
            if (end && end !== start) {
                filename += `_${end}`;
            }
        } else {
             const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
             filename += `_${today}`;
        }
        
        this.ui.exportTableToXlsx(filename);
    }

    displayAnalysisResult(analysisType) {
        switch (analysisType) {
            case '':
                this.ui.displayMessage(this.ui.analysisResultContainer, 'Vui lòng chọn một phân tích từ menu để xem chi tiết.');
                this.currentView = null;
                break;
            
            case 'timeMismatch': {
                if (this.timeMismatchResults.length === 0) {
                     this.ui.displayMessage(this.ui.analysisResultContainer, "Không tìm thấy Y lệnh/Kết quả/Thực hiện nào ngoài thời gian điều trị.", "info");
                    return;
                }
                const def = {
                    displayName: "Kết quả: Thời gian chỉ định/thực hiện ngoài thời gian điều trị",
                    fields: ["MA_LK", "MA_CSKCB", "TEN_BN", "LOAI_KCB", "LOAI_CHI_TIEU", "TEN_CHI_TIEU", "NGAY_YL", "NGAY_TH_YL", "NGAY_KQ", "LY_DO", "NGAY_VAO", "NGAY_RA"]
                };
                this.currentView = { type: 'analysis', name: 'Thoi_gian_ngoai_dot_dieu_tri', displayName: def.displayName };
                this.ui.renderTable(this.timeMismatchResults, def, this.ui.analysisResultContainer, true);
                break;
            }

            case 'outOfHours': {
                 if (this.outOfHoursAnalysisResults.length === 0) {
                    this.ui.displayMessage(this.ui.analysisResultContainer, "Không tìm thấy trường hợp nào có cả ngày vào và ngày ra đều ngoài giờ hành chính.", "info");
                    return;
                }
                const def = {
                    displayName: "Kết quả: Vào/ra viện ngoài giờ hành chính",
                    fields: ["MA_LK", "MA_CSKCB", "HO_TEN", "LOAI_KCB", "NGAY_VAO", "NGAY_RA"]
                };
                this.currentView = { type: 'analysis', name: 'Vao_ra_ngoai_gio', displayName: def.displayName };
                this.ui.renderTable(this.outOfHoursAnalysisResults, def, this.ui.analysisResultContainer, true);
                break;
            }

            case 'executionTime': {
                if (this.executionTimeAnalysisResults.length === 0) {
                    this.ui.displayMessage(this.ui.analysisResultContainer, "Không tìm thấy DVKT nào (XML3, trừ mã nhóm 13) có thời gian thực hiện dưới 5 phút.", "info");
                    return;
                }
                const def = {
                    displayName: "Kết quả: DVKT có thời gian thực hiện dưới 5 phút (XML3, trừ mã nhóm 13)",
                    fields: ["MA_LK", "MA_CSKCB", "TEN_BN", "TEN_DICH_VU", "MA_NHOM", "MA_BAC_SI", "NGUOI_THUC_HIEN", "NGAY_YL", "NGAY_TH_YL", "NGAY_KQ", "THOI_GIAN_TH_KQ_PHUT", "XML2_NGAY_YL_MIN", "NGAY_RA"]
                };
                this.currentView = { type: 'analysis', name: 'DVKT_duoi_5_phut', displayName: def.displayName };
                this.ui.renderTable(this.executionTimeAnalysisResults, def, this.ui.analysisResultContainer, true);
                break;
            }

            case 'electroacupunctureTime': {
                if (this.electroacupunctureTimeResults.length === 0) {
                    this.ui.displayMessage(this.ui.analysisResultContainer, "Không tìm thấy dịch vụ Điện châm (08.0005.0230) nào thực hiện dưới 20 phút.", "info");
                    return;
                }
                const def = {
                    displayName: "Kết quả: Điện châm (08.0005.0230) dưới 20 phút",
                    fields: ["MA_LK", "MA_CSKCB", "TEN_BN", "TEN_DICH_VU", "MA_NHOM", "MA_BAC_SI", "NGUOI_THUC_HIEN", "NGAY_YL", "NGAY_TH_YL", "NGAY_KQ", "THOI_GIAN_TH_KQ_PHUT", "NGAY_RA"]
                };
                this.currentView = { type: 'analysis', name: 'Dien_cham_duoi_20p', displayName: def.displayName };
                this.ui.renderTable(this.electroacupunctureTimeResults, def, this.ui.analysisResultContainer, true);
                break;
            }

            case 'missingMachineCode': {
                if (this.missingMachineCodeResults.length === 0) {
                    this.ui.displayMessage(this.ui.analysisResultContainer, "Không tìm thấy dịch vụ nào thiếu MA_MAY trong các nhóm quy định (1, 2, 3) hoặc dịch vụ 08.0005.0230 (nhóm 18).", "info");
                    return;
                }
                const def = {
                    displayName: "Kết quả: Thiếu mã máy (MA_NHOM 1, 2, 3 và dịch vụ 08.0005.0230 nhóm 18)",
                    fields: ["MA_LK", "MA_CSKCB", "TEN_BN", "MA_DICH_VU", "TEN_DICH_VU", "MA_NHOM", "NGAY_YL"]
                };
                this.currentView = { type: 'analysis', name: 'Thieu_MA_MAY', displayName: def.displayName };
                this.ui.renderTable(this.missingMachineCodeResults, def, this.ui.analysisResultContainer, true);
                break;
            }
        }
    }

    analyzeTimeMismatches(xml1Recs, xml2Recs, xml3Recs) {
        const results = [];
        const parsedXml1Data = new Map(xml1Recs.map(rec => [rec.MA_LK, rec]));

        const getErrorForDate = (maLk, dateStr, dateLabel) => {
            if (!dateStr) return null;
            
            const xml1Rec = parsedXml1Data.get(maLk);
            if (!xml1Rec) return null;

            const ngayVaoStr = xml1Rec.NGAY_VAO;
            const ngayRaStr = xml1Rec.NGAY_RA;
            const ngayVaoDate = Utils.parseXmlDateTime(ngayVaoStr);
            const ngayRaDate = Utils.parseXmlDateTime(ngayRaStr);
            const dateToCheck = Utils.parseXmlDateTime(dateStr);

            if (!dateToCheck) return null;

            let reason = '';
             if (ngayVaoDate && dateToCheck.getTime() < ngayVaoDate.getTime()) {
                reason = 'Trước ngày vào';
            } else if (ngayRaDate && dateToCheck.getTime() > ngayRaDate.getTime()) {
                reason = 'Sau ngày ra';
            }

            if (reason) {
                const formattedDate = Utils.formatDisplayDate(dateStr);
                return `${dateLabel}: ${formattedDate} - ${reason}`;
            }
            return null;
        };

        // XML2 - Check NGAY_YL (Order Date)
        xml2Recs.forEach(rec => {
             const maLk = rec.MA_LK;
             const nYl = rec.NGAY_YL || '';
             
             const reason = getErrorForDate(maLk, nYl, 'Ngày chỉ định');
             if (reason) {
                 const xml1Rec = parsedXml1Data.get(maLk);
                 if (!xml1Rec) return;
                 const maLoaiKcb = xml1Rec["MA_LOAI_KCB"] || '';
                 
                 results.push({
                    MA_LK: maLk,
                    MA_CSKCB: xml1Rec.MA_CSKCB || 'N/A',
                    TEN_BN: xml1Rec.HO_TEN || 'Không rõ',
                    LOAI_KCB: MA_LOAI_KCB_MAP[maLoaiKcb] || maLoaiKcb,
                    TEN_CHI_TIEU: rec.TEN_THUOC || 'N/A',
                    LOAI_CHI_TIEU: 'Thuốc',
                    LY_DO: reason,
                    NGAY_YL: nYl,
                    NGAY_TH_YL: rec.NGAY_TH_YL || '',
                    NGAY_KQ: '',
                    NGAY_VAO: xml1Rec.NGAY_VAO || '',
                    NGAY_RA: xml1Rec.NGAY_RA || ''
                });
             }
        });

        // XML3 - Check NGAY_YL, NGAY_TH_YL, NGAY_KQ
        xml3Recs.forEach(rec => {
             const maLk = rec.MA_LK;
             const nYl = rec.NGAY_YL || '';
             const nThYl = rec.NGAY_TH_YL || '';
             const nKq = rec.NGAY_KQ || '';
             
             const reasons = [];
             
             const rYl = getErrorForDate(maLk, nYl, 'Ngày chỉ định');
             if (rYl) reasons.push(rYl);

             const rThYl = getErrorForDate(maLk, nThYl, 'Ngày thực hiện');
             if (rThYl) reasons.push(rThYl);

             const rKq = getErrorForDate(maLk, nKq, 'Ngày kết quả');
             if (rKq) reasons.push(rKq);

             if (reasons.length > 0) {
                 const xml1Rec = parsedXml1Data.get(maLk);
                 if (!xml1Rec) return;
                 const maLoaiKcb = xml1Rec["MA_LOAI_KCB"] || '';

                 results.push({
                    MA_LK: maLk,
                    MA_CSKCB: xml1Rec.MA_CSKCB || 'N/A',
                    TEN_BN: xml1Rec.HO_TEN || 'Không rõ',
                    LOAI_KCB: MA_LOAI_KCB_MAP[maLoaiKcb] || maLoaiKcb,
                    TEN_CHI_TIEU: rec.TEN_DICH_VU || 'N/A',
                    LOAI_CHI_TIEU: 'DVKT',
                    LY_DO: reasons.join('; '), 
                    NGAY_YL: nYl,
                    NGAY_TH_YL: nThYl,
                    NGAY_KQ: nKq,
                    NGAY_VAO: xml1Rec.NGAY_VAO || '',
                    NGAY_RA: xml1Rec.NGAY_RA || ''
                });
             }
        });

        const uniqueResults = new Map();
        results.forEach(r => {
            const key = `${r.MA_LK}|${r.TEN_CHI_TIEU}|${r.LOAI_CHI_TIEU}|${r.LY_DO}`;
            if (!uniqueResults.has(key)) {
                uniqueResults.set(key, r);
            }
        });

        return Array.from(uniqueResults.values());
    }

    analyzeOutOfHours(xml1Recs) {
        const results = [];
        xml1Recs.forEach((xml1Rec) => {
            const ngayVaoDate = Utils.parseXmlDateTime(xml1Rec["NGAY_VAO"]);
            const ngayRaDate = Utils.parseXmlDateTime(xml1Rec["NGAY_RA"]);

            if (ngayVaoDate && ngayRaDate && Utils.isOutsideWorkingHours(ngayVaoDate) && Utils.isOutsideWorkingHours(ngayRaDate)) {
                const maLoaiKcb = xml1Rec["MA_LOAI_KCB"] || '';
                results.push({
                    MA_LK: xml1Rec["MA_LK"],
                    MA_CSKCB: xml1Rec["MA_CSKCB"] || 'N/A',
                    HO_TEN: xml1Rec["HO_TEN"] || 'Không rõ',
                    LOAI_KCB: MA_LOAI_KCB_MAP[maLoaiKcb] || maLoaiKcb,
                    NGAY_VAO: xml1Rec["NGAY_VAO"],
                    NGAY_RA: xml1Rec["NGAY_RA"]
                });
            }
        });
        return results;
    }

    analyzeExecutionTime(xml1Recs, xml2Recs, xml3Recs) {
        const results = [];
        const parsedXml1Data = new Map(xml1Recs.map(rec => [rec.MA_LK, rec]));
        
        const earliestXml2NgayYlMap = new Map();
        xml2Recs.forEach(rec => {
            const maLk = rec.MA_LK;
            const ngayYl = rec.NGAY_YL;
            if (maLk && ngayYl) {
                const existingNgayYl = earliestXml2NgayYlMap.get(maLk);
                if (!existingNgayYl || ngayYl < existingNgayYl) {
                    earliestXml2NgayYlMap.set(maLk, ngayYl);
                }
            }
        });

        xml3Recs.forEach(xml3Rec => {
            if (xml3Rec["MA_NHOM"] === '13') {
                return;
            }

            const maLk = xml3Rec.MA_LK;
            const xml1Rec = parsedXml1Data.get(maLk);

            if (xml1Rec) {
                const ngayThYlStr = xml3Rec["NGAY_TH_YL"];
                const ngayKqStr = xml3Rec["NGAY_KQ"];

                const ngayThYlDate = Utils.parseXmlDateTime(ngayThYlStr);
                const ngayKqDate = Utils.parseXmlDateTime(ngayKqStr);

                if (ngayThYlDate && ngayKqDate) {
                    const diffMs = ngayKqDate.getTime() - ngayThYlDate.getTime();
                    const timeDiffMinutes = Math.round(diffMs / 60000);
                    
                    if (timeDiffMinutes < 5) {
                        const earliestNgayYlThuoc = earliestXml2NgayYlMap.get(maLk) || '';
                    
                         results.push({
                            MA_LK: maLk,
                            MA_CSKCB: xml1Rec["MA_CSKCB"] || 'N/A',
                            TEN_BN: xml1Rec["HO_TEN"] || 'Không rõ',
                            TEN_DICH_VU: xml3Rec["TEN_DICH_VU"] || 'N/A',
                            MA_NHOM: xml3Rec["MA_NHOM"] || 'N/A',
                            MA_BAC_SI: xml3Rec["MA_BAC_SI"] || 'N/A',
                            NGUOI_THUC_HIEN: xml3Rec["NGUOI_THUC_HIEN"] || 'N/A',
                            NGAY_YL: xml3Rec["NGAY_YL"],
                            NGAY_TH_YL: ngayThYlStr,
                            NGAY_KQ: ngayKqStr,
                            THOI_GIAN_TH_KQ_PHUT: timeDiffMinutes.toString(),
                            XML2_NGAY_YL_MIN: earliestNgayYlThuoc,
                            NGAY_RA: xml1Rec["NGAY_RA"] || ''
                        });
                    }
                }
            }
        });
        return results;
    }

    analyzeElectroacupunctureTime(xml1Recs, xml3Recs) {
        const results = [];
        const parsedXml1Data = new Map(xml1Recs.map(rec => [rec.MA_LK, rec]));
        
        xml3Recs.forEach(xml3Rec => {
            if (xml3Rec["MA_DICH_VU"] === '08.0005.0230') {
                const maLk = xml3Rec.MA_LK;
                const xml1Rec = parsedXml1Data.get(maLk);

                if (xml1Rec) {
                    const ngayThYlStr = xml3Rec["NGAY_TH_YL"];
                    const ngayKqStr = xml3Rec["NGAY_KQ"];

                    const ngayThYlDate = Utils.parseXmlDateTime(ngayThYlStr);
                    const ngayKqDate = Utils.parseXmlDateTime(ngayKqStr);

                    if (ngayThYlDate && ngayKqDate) {
                        const diffMs = ngayKqDate.getTime() - ngayThYlDate.getTime();
                        const timeDiffMinutes = Math.round(diffMs / 60000);
                        
                        if (timeDiffMinutes < 20) {
                             results.push({
                                MA_LK: maLk,
                                MA_CSKCB: xml1Rec["MA_CSKCB"] || 'N/A',
                                TEN_BN: xml1Rec["HO_TEN"] || 'Không rõ',
                                TEN_DICH_VU: xml3Rec["TEN_DICH_VU"] || 'N/A',
                                MA_NHOM: xml3Rec["MA_NHOM"] || 'N/A',
                                MA_BAC_SI: xml3Rec["MA_BAC_SI"] || 'N/A',
                                NGUOI_THUC_HIEN: xml3Rec["NGUOI_THUC_HIEN"] || 'N/A',
                                NGAY_YL: xml3Rec["NGAY_YL"],
                                NGAY_TH_YL: ngayThYlStr,
                                NGAY_KQ: ngayKqStr,
                                THOI_GIAN_TH_KQ_PHUT: timeDiffMinutes.toString(),
                                NGAY_RA: xml1Rec["NGAY_RA"] || ''
                            });
                        }
                    }
                }
            }
        });
        return results;
    }

    analyzeMissingMachineCode(xml1Recs, xml3Recs) {
        const results = [];
        const parsedXml1Data = new Map(xml1Recs.map(rec => [rec.MA_LK, rec]));
        const targetGroups = new Set(['1', '2', '3']);

        xml3Recs.forEach(rec => {
            const maMay = rec.MA_MAY;
            const maNhom = rec.MA_NHOM;
            const maDichVu = rec.MA_DICH_VU;

            if (!maMay || maMay.trim() === '') {
                if (targetGroups.has(maNhom) || (maNhom === '18' && maDichVu === '08.0005.0230')) {
                    const xml1Rec = parsedXml1Data.get(rec.MA_LK);
                    results.push({
                        MA_LK: rec.MA_LK,
                        MA_CSKCB: xml1Rec ? (xml1Rec.MA_CSKCB || '') : '',
                        TEN_BN: xml1Rec ? (xml1Rec.HO_TEN || '') : '',
                        MA_DICH_VU: maDichVu,
                        TEN_DICH_VU: rec.TEN_DICH_VU || '',
                        MA_NHOM: maNhom,
                        NGAY_YL: rec.NGAY_YL || ''
                    });
                }
            }
        });

        return results;
    }
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});
