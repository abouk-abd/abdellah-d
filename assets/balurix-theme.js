/**
 * BALURIX Natural Care - YouCan Theme Client JavaScript
 * Handles:
 * - Dynamic pack bundle selection & instant pricing update
 * - COD Order Form submission feedback & WhatsApp fallback
 * - Accordion smooth toggles
 */

(function () {
  'use strict';

  function initPackSelector() {
    var radioLabels = document.querySelectorAll('.pack-radio-label');
    var priceDisplay = document.querySelector('.current-price');
    var submitButton = document.querySelector('.submit-cod-btn span');

    if (!radioLabels.length) return;

    var packPrices = {
      'pack-1': { price: 289, label: 'تأكيد طلبي الآن — الدفع عند الاستلام (289 د.م) 🛒' },
      'pack-2': { price: 449, label: 'تأكيد طلبي الآن — باقة التوفير (449 د.م) 🛒' },
      'pack-3': { price: 499, label: 'تأكيد طلبي الآن — باقة الجمال الشامل (499 د.م) 🛒' }
    };

    radioLabels.forEach(function (label) {
      label.addEventListener('click', function () {
        radioLabels.forEach(function (l) { l.classList.remove('active'); });
        label.classList.add('active');

        var radio = label.querySelector('input[type="radio"]');
        if (radio) {
          radio.checked = true;
          var val = radio.value;
          if (packPrices[val]) {
            if (priceDisplay) {
              priceDisplay.innerHTML = packPrices[val].price + ' <span class="currency">د.م</span>';
            }
            if (submitButton) {
              submitButton.textContent = packPrices[val].label;
            }
          }
        }
      });
    });
  }

  function initCodForm() {
    var form = document.querySelector('.balurix-cod-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      var phoneInput = document.getElementById('customer_phone');
      if (phoneInput) {
        var phoneVal = phoneInput.value.replace(/[^0-9+]/g, '');
        if (phoneVal.length < 9) {
          alert('يرجى التأكد من إدخال رقم هاتف صحيح للتواصل وتأكيد التوصيل بالمغرب.');
          e.preventDefault();
          return false;
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initPackSelector();
    initCodForm();
  });
})();
