function addBrand() {
  var brandSource = document.getElementById('brand-input').value;
  if (brandSource != '') {
    return ('Brand: ') + brandSource;
  }
  else {
    return ('');
  }
}

function addPromo() {
  var promoSource = document.getElementById('promo-input').value;
  if (promoSource != '') {
    return ('\nPromotion Code: ') + promoSource;
  }
  else {
    return ('');
  }
}

function addMediaID() {
  var brandSource = document.getElementById('brand-input').value;
  var promoSource = document.getElementById('promo-input').value;
  if (brandSource == 'CT') {
    return ('\nMedia ID: C') + promoSource;
  }
  else if (brandSource == 'KP') {
    return ('\nMedia ID: K') + promoSource;
  }
  else if (brandSource == 'ST') {
    return ('\nMedia ID: S') + promoSource;
  }
  else if (brandSource == 'WC') {
    return ('\nMedia ID: W') + promoSource;
  }
  else {
    return ('');
  }
}

function addPromoType() {
  var promoTypeSource = document.getElementById('promo-type-input').value;
  if (promoTypeSource != '') {
    return ('\nProcessor: ') + promoTypeSource;
  }
  else {
    return ('');
  }
}

function addUseCase() {
  var useCaseSource = document.getElementById('use-case-input').value;
  if (useCaseSource != '') {
    return ('\nAccount Limit: ') + useCaseSource;
  }
  else {
    return ('');
  }
}

function addStartDate() {
  var startDateSource = document.getElementById('datepicker1').value;
  if (startDateSource != '') {
    return ('\nStart Date: ') + startDateSource;
  }
  else {
    return ('');
  }
}

function addEndDate() {
  var endDateSource = document.getElementById('datepicker2').value;
  if (endDateSource != '') {
    return ('\nEnd Date: ') + endDateSource;
  }
  else {
    return ('');
  }
}

function addTestDate() {
  var testDateSource = document.getElementById('datepicker3').value;
  if (testDateSource != '') {
    return ('\nTest Date: ') + testDateSource;
  }
  else {
    return ('');
  }
}

function addDiscount() {
  var discountSource = document.getElementById('discount-input').value;
  var discountTypeSource = document.getElementById('discount-type-input').value;
  if (discountTypeSource == '$') {
    return ('\nDiscount: ') + discountTypeSource + discountSource;
  }
  else if (discountTypeSource == '%') {
    return ('\nDiscount: ') + discountSource + discountTypeSource;
  }
  else {
    return ('');
  }
}

function addThreshold() {
  var thresholdSource = document.getElementById('threshold-input').value;
  var thresholdTypeSource = document.getElementById('threshold-type-input').value;
  if (thresholdTypeSource == '$') {
    return ('\nThreshold: ') + thresholdTypeSource + thresholdSource;
  }
  else if (thresholdTypeSource == 'Units') {
    return ('\nThreshold: ') + thresholdSource + " " + thresholdTypeSource;
  }
  else {
    return ('');
  }
}

function addItems() {
  var itemSource = document.getElementById('item-input').value;
  if (itemSource != '') {
    return ('\nItems: ') + itemSource;
  }
  else {
    return ('');
  }
}

function addDescription() {
  var descriptionSource = document.getElementById('description-input').value;
  if (descriptionSource != '') {
    return ('\nDescription: ') + descriptionSource;
  }
  else {
    return ('');
  }
}



function myFunction() {
    document.getElementById("output").value = addBrand() + addPromoType() + addPromo() + addMediaID() + addUseCase() + addStartDate() + addEndDate() + addTestDate() + addDiscount() + addThreshold() + addItems() + addDescription();
}

function copyText() {
  var Text = document.getElementById("yourUTM");
  Text.select();
  navigator.clipboard.writeText(Text.value);
}

