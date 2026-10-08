class SinhVien {
    constructor(id, nam, year, chuyenNganh) {
        this.id = id;
        this.nam = nam;
        this.year = year;
        this.chuyenNganh = chuyenNganh;
    }
    Show() {
        console.log("========== SINH VIÊN ==========");
        console.log("ID: " + this.id);
        console.log("Năm: " + this.nam);
        console.log("Năm học: " + this.year);
        console.log("Chuyên ngành: " + this.chuyenNganh);
    }
}

class SinhVienIT extends SinhVien {
    constructor(id, nam, year, chuyenNganh, mess) {
        super(id, nam, year, chuyenNganh);
        this.mess = mess;
    }
    Show() {
        console.log("========== Sinh vien it ==========");
        console.log("ID: " + this.id);
        console.log("Năm: " + this.nam);
        console.log("Năm học: " + this.year);
        console.log("Sinh Vien Chuyen Nganh: " + this.chuyenNganh);
        console.log("Bạn nghĩ: " + this.mess);
    }
}



let SV1 = new SinhVien( "SV001",2,2026,"Kinh tế");
let SV2 = new SinhVienIT("SV002",2,2026,"Công nghệ thông tin","AI có cướp việc của IT hay không?");
let SV3 = new SinhVien("SV003",3,2026,"Công nghệ thông tin");
let SV4 = new SinhVien("SV004",1,2026,"Marketing");



let dssv = [SV1, SV2, SV3, SV4];
console.log("========== Tất Cả Sinh Viên ==========");
dssv.map(function(sv) {
    sv.Show();
});



console.log("========== sinh vien cntt ==========");

let dssvCNTT = dssv.filter(function(sv) {
    return sv.chuyenNganh == "Công nghệ thông tin";
});
dssvCNTT.map(function(sv) {
    sv.Show();
});


