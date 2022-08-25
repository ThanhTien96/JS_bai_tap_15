/**
 * Nguoi Khoi Tao: Nguyen Thanh Tien;
 * 
 * Ngay Khoi Tao: 23/08/2022;
 * 
 * version: 1.0.0
 */


// Ham Dom ID
function domId(id) {
  return document.getElementById(id)
};

/// BÀI TẬP 1: quản lý tuyển sinh;

/**
 * INPUT: điểm chuẩn , điểm môn 1, điểm môn 2, điểm môn 3, điểm khu vực, điểm đối tượng được ưu tiên.
 * 
 * PROCESS: điểm tông  = điểm môn 1 + điểm môn 2 + điểm môn 3 + điểm khu vực + điểm ưu tiên.
 * điểm tông = điểm chuẩn và ko điêm môn nào bằng không.
 * 
 * OUTPUT: báo điểm tổng và kết quả đậu rớt
 */

/// hàm lấy giá trị điểm khu vực
function typeArea(area) {
  var point = domId(area).value;
  if (point === 'A') {
    return 2;
  }else if (point === 'B') {
    return 1;
  }else if (point === 'C') {
    return 0.5;
  }else {
    return 0
  }
};  

//// hàm lấy giá trị điểm đối tượng
function typePeople(people) {
  var point = domId(people).value;
  switch (point) {
    case '1':
      return 2.5;
    case '2':
      return 1.5;
    case '3':
      return 1;
    default :{
      return 0;
    }
  }
}

// hàm Tính điểm

function totalGrande(idStander,idSub1,idSub2,idSub3) {
  
  //INPUT:
  var standardPoint = Number(domId(idStander).value);
  var sub1 = Number(domId(idSub1).value);
  var sub2 = Number(domId(idSub2).value);
  var sub3 = Number(domId(idSub3).value);
  var pointArea = typeArea('typeArea');
  var pointPeople = typePeople('typePeople');

  // OUTPUT:
  var totalGrand = sub1 + sub2 + sub3 + pointArea + pointPeople;
  var totalPoint = 0;
  //Process:
  if (totalGrand >= standardPoint && sub1 > 0 && sub2 > 0 && sub3 >0) {
    totalPoint = 'Bạn Đã Đậu. ' + 'Tổng Điểm: ' + totalGrand; 
  }else {
    totalPoint = 'Bạn Không Đã Rớt. ' + 'Tổng Điểm: ' + totalGrand;
  }

  return totalPoint
};
// tạo sự kiện onclick và in kết quả
document.getElementById('btnGrade').onclick = function () {
  
  domId('tagPoint').innerHTML = totalGrande('standardPoint','sub1','sub2','sub3');
  
  ///in ra console
  console.log(totalGrande('standardPoint','sub1','sub2','sub3'))
};

/// BÀI TẬP 2: TÍNH TIỀN ĐIỆN

/**
 * INPUT: tên nguoi su dung, so kw
 * 
 * PROCESS:
 * so kw * giá điện.
 * 0 đến 50 kw giá : 500d
 * 50 đến 100 kw kế giá : 650d
 * 100 đến 200 kw kế giá : 850d
 * 200 đến 350 kw kế giá : 1100d
 * số điện xài còn lại giá: 1300d 
 * 
 * OUTPUT: tính và xuất tiền điện
 */


///Hàm Tính Tiền điện

function elecBill(kw) {

  //INPUT:
  var elecKw = Number(domId(kw).value);

  /// OUTPUT:
  var resultElec = 0;
  
  ///PROCESS:
  if (elecKw <= 50 && elecKw > 0) {
    resultElec = elecKw * 500;
  }else if (elecKw <= 100) {
    resultElec = 50 * 500 + (elecKw - 50) * 650;
  }else if (elecKw <= 200) {
    resultElec = 50 * 500 + 50 * 650 + (elecKw - 100) * 850;
  }else if (elecKw <= 350) {
    resultElec = 50 * 500 + 50 * 650 
    + 100 * 850 + (elecKw - 200) * 1100;
  }else {
    resultElec = 50 * 500 + 50 * 650 + 100 * 850 
    + 150 * 1100 + (elecKw - 350) * 1300;
  }
  return resultElec;

};

/// viết sự kiện:
document.getElementById('btnElecBill').addEventListener('click', function () {
  var userNameElec = domId('elecName').value;
  var resultElec = elecBill('elecKw');
  /// hiện thị kết quả:
  document.getElementById('tagElecBill').innerHTML = 'Họ Tên: ' 
  + userNameElec + '; ' + ' Tiền Điện: ' + resultElec.toLocaleString() + ' VND.';
  /// in ra cửa sổ console:
  console.log('Họ Tên: ' 
  + userNameElec + '; ' + ' Tiền Điện: ' + resultElec.toLocaleString() + ' VND.')
});

// >>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<< //
/** BÀI SỐ 3: 
 * Viết chương trình nhập vào thông tin của 1 cá nhân (Họ tên, tổng thu nhập năm, số
  người phụ thuộc). Tính và xuất thuế thu nhập cá nhân phải trả theo quy định sau:
  Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
 */

  /**
   * INPUT: họ tên, tổng thu nhập / năm, số người phụ thuộc;
   * 
   * PROCESS: 
   * tinh thu nhap chiu thue = tổng thu nhập - 4tr  - so nguoi phụ thuộc * 1tr6;
   * tinh thuế xuất:
   * 
   * OUTPUT: xuất thuể thu nhập cá nhân;
   */


  // viết hàm tính thu nhập chịu thuế:
  
  function income() {
    var incomeTax = Number(domId('inconme').value);
    var dependence = Number(domId('dependence').value);
    // OUTPUT:
    var incomeRank = 0;
    if (dependence > 0) {
      incomeRank = incomeTax - 4e+6 - (dependence * 16e+5);
    }else {
      incomeRank = incomeTax - 4e+6;
    }
    return incomeRank    
  };

  //Viết hàm tính thuế xuất:

  function incomeTax() {
    
    
    var incomeTax = income();
    // OUTPUT:
    var resultIncome = 0;
    ///process:

    if (incomeTax <= 60e+6 && incomeTax > 4e+6) {
      resultIncome = incomeTax * 0.05;
    }else if (incomeTax > 60e+6) {
      resultIncome = 60e+6 * 0.05 + (incomeTax - 60e+6) * 0.1;
    }else if (incomeTax > 120e+6) {
      resultIncome = 60e+6 * 0.05 + 60e+6 * 0.1 + (incomeTax - 120e+6) * 0.15;
    }else if (incomeTax > 210e+6) {
      resultIncome = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 
      + (incomeTax - 210e+6) * 0.2;
    }else if (incomeTax > 384e+6) {
      resultIncome = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 
      + 174e+6 * 0.2 + (incomeTax - 384e+6) * 0.25;
    }else if (incomeTax > 624e+6) {
      resultIncome = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 
      + 174e+6 * 0.2 + 240e+6 * 0.25 + (incomeTax - 624e+6) * 0.3;
    }else if (incomeTax > 960) {
      resultIncome = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 
      + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (incomeTax - 960e6) * 3.5;
    }else {
      resultIncome = alert('Tiền thu nhập không hợp lệ');
    }
    
    return resultIncome;
  };
domId('btnIncome').onclick = function () {
  
  // input
  var incomeName = domId('taxName').value;
  var incomeTotal = incomeTax();  

  //output
  var incomeResult = 'Họ Và Tên: ' + incomeName + '; Tiền Thuế Thu Nhập Cá Nhân: ' + incomeTotal.toLocaleString();
  
  domId('tagIncomeTax').innerHTML = incomeResult; 

};


/**
 Bài 4:❖ Viết chương trình tính hóa đơn khách hàng cho một công ty cáp. Có 2 loại khách hàng:
Nhà dân và doanh nghiệp. Có 2 mức giá tính tiền cáp:
1. Nhà dân:
• Phí xử lý hóa đơn: 4.5$
• Phí dịch vụ cơ bản: 20.5$
• Thuê kênh cao cấp: 7.5$ / kênh
2. Doanh nghiệp
• Phí xử lý hóa đơn: 15$
• Phí dịch vụ cơ bản: 75$ cho tổng 10 kết nối đầu, mỗi kết nối thêm 5$ / kết nối
• Thuê kênh cao cấp: 50$ / kênh
❖ Chương trình cho phép nhập vào Mã khách hàng, loại khách hàng, số kết nối, số kênh
cao cấp. Nếu chọn loại khách hàng là Doanh nghiệp ô nhập số kết nối sẽ hiện lên, nếu
chọn loại khách hàng là nhà dân thì ô nhập kết nối sẽ ẩn đi hoặc disabled
 */

/**
 INPUT: mã khach hang, loại khách hang, so kenh và so ket noi. Nếu là doanh nghiep thì input so ket noi hiện và ngược lại;
 
 PROCESS:
nhà dân : phi dịch vụ cơ bản + phi xử lý hóa đơn + kênh cao cấp
doanh nghiệp: phi dịch vu co bản + phí xử lý hóa đơn + kenh cao cap. phi dịch vu cơ bản là cho 10 kết nối đầu, mỗi kết nối thêm công 5$

 OUTPUT: xuat hóa đơn;

 */


  /// viết hàm tính tiền cáp khách hang doanh nghiệp:
function cableBillBusiness(channels,moreConection) {
  // output 
  var billTotal = 0;

  // Process
  
  if (moreConection <= 10) {
    billTotal = 15 + 75 + channels * 50;
  }else {
    billTotal = 15 + 75 + (moreConection - 10) * 5 + channels * 50;
  }
  
  return billTotal 
}

// viet Hàm tính Hóa Đơn Cáp Nhà Dân

function cableHomeBill(channels) {
 // output
 var billTotal = 4.5 + 20.5 + channels * 7.5;

 return billTotal
}





domId('btncableBill').onclick = function () {
  /// input;
  var client = domId('selecCable').value;

  var cableName = domId('cableName').value;
  var channels = Number(domId('channels').value);
  var moreConection = Number(domId('moreConnection').value);
  // hàm tính tiền cáp
  var business = cableBillBusiness(channels,moreConection);
  var home = cableHomeBill(channels);
  // output
  var toTalBillCable = '';

  //process

  if (client === 'Ba') {
    toTalBillCable = 'Mã Khách Hang: ' + cableName + ' ; Tiền Cáp: ' + business + '$';
  }else if (client === 'Bb') {
    toTalBillCable = 'Mã Khách Hang: ' + cableName + ' ; Tiền Cáp: ' + home + '$';
  }else {
    toTalBillCable = 'Vui Lòng Chọn Loại Khách Hàng';
  }
 
  domId('cableToBill').innerHTML = toTalBillCable;
};




// display none input conection
domId('selecCable').onclick = function () {
  var toClick = document.getElementById('selecCable').value;
  
  if (toClick === 'Ba') {
    domId('moreConnection').style.display = 'inline';
  }else {
    domId('moreConnection').style.display = 'none';
  }
};