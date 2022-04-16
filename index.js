function myFunction() {
    Swal.fire({
        icon: 'info',
        title: 'Chào mừng bạn đến với website của chúng tôi, bạn có muốn nhận được mã giảm giá khi có chuyến đi du lịch không',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Có',
        denyButtonText: `Không`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Chúc mừng, bạn đã nhận được 1 phiếu giảm giá 50%', '', 'success')
        } else if (result.isDenied) {
          Swal.fire({
            icon:   'question',
            title: 'Bạn chắc chứ',
            showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Tôi chắc',
        denyButtonText: `Không, tôi muốn nhận phiếu giảm giá`,
          })
          if (result.isConfirmed) {
            Swal.fire('Chúc mừng, bạn đã nhận được 1 phiếu giảm giá 50%', '', 'success')
          }
        }
      })
}