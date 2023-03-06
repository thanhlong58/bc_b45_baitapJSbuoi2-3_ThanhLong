//bài 1 : 



document.getElementById('btnTinhLuong').onclick = function (){
    //input luongNgay, soNgayLam: number
    var luong1Ngay = +document.getElementById('luong-1-ngay').value;
    var soNgayLam = +document.getElementById('so-ngay-lam').value;
    // output luong : number
    //process
    var luong = luong1Ngay * soNgayLam ; 

    //hien thị giao diện
    document.getElementById('ket-qua-b1').innerHTML = luong ;

}





//bài 2 : 

document.getElementById('btnTinhTrungBinh').onclick = function (){
    //input soThuNhat, soThuHai, soThuBa, soThuTu, soThuNam : number
    var soThuNhat = +document.getElementById('so-1').value;
    var soThuHai = +document.getElementById('so-2').value;
    var soThuBa = +document.getElementById('so-3').value;
    var soThuTu = +document.getElementById('so-4').value;
    var soThuNam = +document.getElementById('so-5').value;
    //output soTrungBinh 
    var soTrungBinh = 0;
    //process
    soTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam) / 5 ;
    //hiển thị giao diện
    document.getElementById ('ket-qua-b2').innerHTML = soTrungBinh;
}



//bài 3  

document.getElementById('btnQuyDoiTien').onclick = function() {
    //input tienUSD : number 
    var tienUSD = +document.getElementById('so-tien-nhap').value;
    //output tienVND
    var tienVND = 0;
    //process
    tienVND = tienUSD * 23500 ;
    //hiển thị giao diện

    document.getElementById('ket-qua-b3').innerHTML = new Intl.NumberFormat('vn-VN').format(tienVND) +'vnd' ;

    
}



//bài 4

document.getElementById ('btnTinhChuViDienTich').onclick = function (){
    //input chieuDai, chieuRong : number 
    var chieuDai = +document.getElementById('chieu-dai').value;
    var chieuRong = +document.getElementById('chieu-rong').value;
    //output dienTich, chuVi

    var dienTich = 0;
    var chuVi = 0;

    //process

     dienTich = chieuDai * chieuRong ;
     chuVi = (chieuDai + chieuRong) * 2 ;


   //hiển thị giao diện
   
   document.getElementById('ket-qua-b4').innerHTML = `
   Diện tích : ${dienTich} cm2 </br>
   Chu Vi : ${chuVi} cm
   
   `

}





//bài 5



document.getElementById ('btnTinhTongSo2ChuSo').onclick = function(){

    //input so2ChuSo : number
    
    var so2ChuSo = +document.getElementById('so-2-chu-so').value;

    //output tong : 
    var tong = 0 ;
   

    //process

    var soHangDonVi = so2ChuSo % 10;

    var soHangChuc = so2ChuSo / 10  ;

     tong = soHangChuc + soHangDonVi ;

     //in ra giao diện

     document.getElementById ('ket-qua-b5').innerHTML = tong.toFixed(0) ;



}