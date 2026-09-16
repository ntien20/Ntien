// ==============================================================================
// THE ABYSSAL COSMOS - DATASET BÁCH KHOA TOÀN THƯ VŨ TRỤ
// Nội dung chuyên sâu, khoa học và huyền bí về vạn vật trong không gian
// ==============================================================================

const COSMIC_DATABASE = {
  categories: [
    { id: 'all', name: 'Tất Cả Thiên Thể', icon: 'sparkles' },
    { id: 'solar', name: 'Thái Dương Hệ & Hành Tinh', icon: 'orbit' },
    { id: 'asteroids', name: 'Tiểu Hành Tinh & Mảnh Vỡ', icon: 'shield-alert' },
    { id: 'blackholes', name: 'Hố Đen & Dị Điểm Vô Cực', icon: 'disc' },
    { id: 'nebulae', name: 'Tinh Vân & Vườn Ươm Sao', icon: 'cloud-fog' },
    { id: 'extremes', name: 'Hiện Tượng Cực Hạn & Bí Ẩn Tối', icon: 'zap' },
    { id: 'humanity', name: 'Sứ Mệnh & Mắt Thần Không Gian', icon: 'satellite' }
  ],

  entities: [
    // --- HỐ ĐEN & DỊ ĐIỂM ---
    {
      id: 'ton-618',
      category: 'blackholes',
      name: 'TON 618',
      designation: 'Ultramassive Black Hole',
      subtitle: 'Quái Kiệt Hư Vô Khổng Lồ Nhất Từng Biết',
      distance: '18.2 tỷ năm ánh sáng',
      mass: '66 tỷ lần khối lượng Mặt Trời',
      temperature: 'Hàng triệu °C (Đĩa bồi tụ)',
      diameter: '390 tỷ km (Gấp 11 lần quỹ đạo Sao Hải Vương)',
      image: 'assets/images/black_hole.jpg',
      badge: 'Cực Hạn Hư Không',
      color: '#a855f7',
      quote: '"Ánh sáng cần hàng tuần lễ chỉ để băng qua bóng tối của miệng hố."',
      overview: 'TON 618 là một chuẩn tinh cực sáng chứa hố đen siêu khối lượng lớn nhất từng được nhân loại ghi nhận. Khối lượng của nó tương đương với toàn bộ các ngôi sao trong Dải Ngân Hà gộp lại nhiều lần. Nó tỏa sáng rực rỡ gấp 140 nghìn tỷ lần Mặt Trời nhờ năng lượng ma sát kinh hoàng của khí gas bị xé toạc trong đĩa bồi tụ.',
      details: [
        { label: 'Chân trời sự kiện', value: 'Bán kính Schwarzschild ~ 1.300 AU' },
        { label: 'Độ sáng tuyệt đối', value: '-30.7 mag (Sáng hơn cả thiên hà mẹ)' },
        { label: 'Tốc độ quay', value: 'Gần tiệm cận tốc độ ánh sáng' },
        { label: 'Số phận vật chất', value: 'Bị kéo dãn thành sợi hạ nguyên tử (Spaghettification)' }
      ],
      lore: 'Nếu đặt TON 618 vào trung tâm hệ Mặt Trời, chân trời sự kiện của nó sẽ nuốt trọn Mặt Trời, Sao Thủy, Trái Đất, Sao Hỏa, Sao Mộc, Sao Thổ, Sao Thiên Vương, Sao Hải Vương, vành đai Kuiper và vươn sâu vào tận mây Oort. Nó là minh chứng hùng hồn nhất cho sự nhỏ bé tột cùng của nhân loại trước vực thẳm vũ trụ.'
    },
    {
      id: 'sagittarius-a',
      category: 'blackholes',
      name: 'Sagittarius A*',
      designation: 'Supermassive Black Hole',
      subtitle: 'Trái Tim Tối Trung Tâm Dải Ngân Hà',
      distance: '26.673 năm ánh sáng',
      mass: '4.15 triệu lần khối lượng Mặt Trời',
      temperature: 'Hàng tỷ độ (Khí ion hóa quanh đĩa)',
      diameter: '51.8 triệu km',
      image: 'assets/images/black_hole.jpg',
      badge: 'Trọng Tâm Ngân Hà',
      color: '#eab308',
      quote: '"Nơi mọi quỹ đạo của dải Ngân Hà đều cúi mình quy phục."',
      overview: 'Sagittarius A* ngự trị tại tâm điểm của thiên hà chúng ta. Toàn bộ hơn 100 tỷ ngôi sao trong dải Ngân Hà, bao gồm cả Thái Dương Hệ, đều đang lặng lẽ quay quanh vực thẳm vô hình này với chu kỳ 230 triệu năm một vòng.',
      details: [
        { label: 'Thời gian ánh sáng qua bán kính', value: '~4.5 phút' },
        { label: 'Phát hiện trực tiếp', value: 'Kính viễn vọng Chân trời Sự kiện (EHT) 2022' },
        { label: 'Bức xạ phát ra', value: 'Sóng vô tuyến, tia X cực mạnh khi nuốt sao' },
        { label: 'Đặc tính thời gian', value: 'Thời gian chậm lại vô hạn tại ranh giới' }
      ],
      lore: 'Bức ảnh lịch sử chụp năm 2022 đã vén màn chiếc bóng ma quái của Sgr A*. Xung quanh nó, các ngôi sao khổng lồ như S2 di chuyển với vận tốc lên tới hàng ngàn km/s như những con thiêu thân nhảy múa bên miệng lò lửa vĩnh cửu.'
    },
    {
      id: 'm87-star',
      category: 'blackholes',
      name: 'Messier 87*',
      designation: 'Supermassive Black Hole',
      subtitle: 'Bức Ảnh Chân Dung Đầu Tiên Của Hố Đen Lịch Sử',
      distance: '53.5 triệu năm ánh sáng',
      mass: '6.5 tỷ lần khối lượng Mặt Trời',
      temperature: 'Hàng trăm triệu Kelvin',
      diameter: '38 tỷ km',
      image: 'assets/images/black_hole.jpg',
      badge: 'Cột Mốc Lịch Sử',
      color: '#f97316',
      quote: '"Ngày nhân loại lần đầu tiên nhìn vào bóng tối tuyệt đối."',
      overview: 'Năm 2019, nhân loại lần đầu tiên chứng kiến một bức ảnh thực tế về một hố đen: chiếc nhẫn ánh sáng rực lửa bao quanh một khoảng trống đen kịt vô tiền khoáng hậu tại trung tâm thiên hà elip khổng lồ M87.',
      details: [
        { label: 'Tia plasma liên thiên hà', value: 'Dài tới 5.000 năm ánh sáng' },
        { label: 'Vận tốc luồng phản lực', value: 'Vận tốc biểu kiến gấp nhiều lần ánh sáng' },
        { label: 'Dự án quan sát', value: 'Mạng lưới EHT kết nối toàn cầu' }
      ],
      lore: 'Tia phản lực vật chất (relativistic jet) bắn ra từ cực của M87* có sức tàn phá khủng khiếp, đủ sức thổi bay các đám mây khí và ngăn chặn sự hình thành sao trên phạm vi hàng chục nghìn năm ánh sáng.'
    },

    // --- HIỆN TƯỢNG CỰC HẠN & BÍ ẨN TỐI ---
    {
      id: 'bootes-void',
      category: 'extremes',
      name: 'Khoảng Trống Boötes',
      designation: 'The Great Nothing / Supervoid',
      subtitle: 'Vực Thẳm 330 Triệu Năm Ánh Sáng Hư Vô Rợn Người',
      distance: '700 triệu năm ánh sáng (Chòm Boötes)',
      mass: 'Gần như bằng 0 (Mật độ vật chất cực thấp)',
      temperature: '2.7 Kelvin (-270.45°C)',
      diameter: '330 triệu năm ánh sáng',
      image: 'assets/images/bootes_void.jpg',
      badge: 'Hư Vô Tuyệt Đối',
      color: '#6366f1',
      quote: '"Nếu Trái Đất nằm ở trung tâm khoảng trống này, ta sẽ nghĩ vũ trụ chỉ có mỗi dải Ngân Hà."',
      overview: 'Thường được gọi là "Đại Hư Vô" (The Great Nothing), khoảng trống Boötes là một trong những cấu trúc rỗng lớn nhất được biết đến trong vũ trụ. Trong khi một vùng không gian kích thước này thông thường phải chứa khoảng 10.000 thiên hà, Boötes chỉ chứa vỏn vẹn khoảng 60 thiên hà nằm rải rác trơ trọi.',
      details: [
        { label: 'Thể tích', value: '~236.000 Mpc³' },
        { label: 'Mật độ vật chất', value: 'Dưới 1/4 mật độ trung bình của vũ trụ' },
        { label: 'Giả thuyết thiên văn', value: 'Sự sáp nhập của các khoảng trống nhỏ hơn' },
        { label: 'Bí ẩn chưa có lời giải', value: 'Sự hình thành dị thường của cấu trúc xốp rỗng' }
      ],
      lore: 'Bao quanh khoảng trống Boötes là các sợi tơ thiên hà đan xen như mạng nhện. Đi sâu vào lòng khoảng trống, sự cô độc là tuyệt đối. Không có ánh sáng sao, không có tín hiệu vô tuyến, chỉ có không gian lạnh lẽo và sự câm lặng vĩnh cửu.'
    },
    {
      id: 'magnetar-sgr',
      category: 'extremes',
      name: 'Sao Từ SGR 1806-20',
      designation: 'Magnetar / Neutron Star',
      subtitle: 'Quái Vật Từ Trường Xé Toạc Cấp Độ Nguyên Tử',
      distance: '50.000 năm ánh sáng',
      mass: '1.4 - 2 lần khối lượng Mặt Trời',
      temperature: 'Hơn 10 triệu °C',
      diameter: 'Chỉ vỏn vẹn 20 km',
      image: 'assets/images/magnetar.jpg',
      badge: 'Từ Trường Cực Hạn',
      color: '#06b6d4',
      quote: '"Ở cự ly 1.000 km, từ trường của nó sẽ xé tan các đám mây electron của bạn thành từng mảnh."',
      overview: 'Magnetar là tàn dư sao neutron có từ trường mạnh nhất vũ trụ, đạt mức 10^11 Tesla (gấp hàng ngàn tỷ lần từ trường Trái Đất). Năm 2004, một cơn "địa chấn sao" (starquake) trên bề mặt SGR 1806-20 đã giải phóng năng lượng trong 0.1 giây bằng năng lượng Mặt Trời phát ra trong 250.000 năm!',
      details: [
        { label: 'Cường độ từ trường', value: '10^15 Gauss' },
        { label: 'Hiện tượng lượng tử', value: 'Biến chân không thành lưỡng chiết quang học' },
        { label: 'Tác động tới Trái Đất', value: 'Năm 2004 ion hóa bầu khí quyển từ khoảng cách 50.000 năm ánh sáng' },
        { label: 'Mật độ', value: '1 thìa cà phê nặng 1 tỷ tấn' }
      ],
      lore: 'Nếu một sao từ tiến gần Trái Đất ở khoảng cách bằng nửa chặng đường tới Mặt Trăng, toàn bộ thẻ tín dụng trên toàn cầu sẽ bị xóa sạch dữ liệu lập tức, và cơ thể con người sẽ bị biến dạng ở cấp độ phân tử sinh học.'
    },
    {
      id: 'gamma-ray-burst',
      category: 'extremes',
      name: 'Chớp Tia Gamma (GRB)',
      designation: 'Relativistic Hypernova Jet',
      subtitle: 'Tia Chớp Xóa Sổ Sự Sống Trong Chớp Mắt',
      distance: 'Hàng tỷ năm ánh sáng',
      mass: 'Năng lượng bằng chuyển hóa toàn bộ khối lượng sao',
      temperature: 'Hàng tỷ Kelvin',
      diameter: 'Chùm tia chuẩn trực hẹp',
      image: 'assets/images/magnetar.jpg',
      badge: 'Hủy Diệt Sinh Học',
      color: '#ef4444',
      quote: '"Cái chết đến với tốc độ ánh sáng: bạn sẽ không bao giờ nhìn thấy nó trước khi bị thiêu rụi."',
      overview: 'Chớp tia Gamma là những vụ nổ phát xạ điện từ sáng nhất và giàu năng lượng nhất kể từ sau Vụ Nổ Lớn. Sinh ra khi một ngôi sao siêu khổng lồ sụp đổ thành hố đen (Hypernova) hoặc khi hai sao neutron va chạm, chùm tia này có thể xóa sổ tầng ozone của một hành tinh cách xa hàng nghìn năm ánh sáng.',
      details: [
        { label: 'Thời lượng', value: 'Từ vài mili-giây đến vài phút' },
        { label: 'Công suất đỉnh', value: 'Lớn hơn tổng công suất của toàn bộ các ngôi sao trong vũ trụ khả kiến' },
        { label: 'Lịch sử Trái Đất', value: 'Nghi vấn gây ra đại tuyệt chủng Ordovic-Silur 440 triệu năm trước' },
        { label: 'Vận tốc hạt', value: '99.9999% tốc độ ánh sáng' }
      ],
      lore: 'Bức xạ gamma cực mạnh chiếu thẳng vào khí quyển hành tinh sẽ biến nitơ và oxy thành oxit nitơ độc hại, chặn đứng ánh sáng mặt trời gây mùa đông hạt nhân vũ trụ và phá hủy chuỗi thức ăn sinh quyển vĩnh viễn.'
    },
    {
      id: 'dark-matter-energy',
      category: 'extremes',
      name: 'Vật Chất Tối & Năng Lượng Tối',
      designation: 'Cosmic Invisible Fabric',
      subtitle: 'Bóng Tối Chiếm 95% Toàn Bộ Vũ Trụ',
      distance: 'Hiện diện khắp không-thời gian',
      mass: '68% Năng lượng tối + 27% Vật chất tối',
      temperature: 'Vô hình trước nhiệt bức xạ',
      diameter: 'Toàn thể vũ trụ quan sát được',
      image: 'assets/images/bootes_void.jpg',
      badge: 'Bí Ẩn Tối Thượng',
      color: '#8b5cf6',
      quote: '"Tất cả những gì con người thấy, chạm và hiểu chỉ là 5% lớp bọt nổi trên đại dương vô hình."',
      overview: 'Tất cả các ngôi sao, thiên hà, hành tinh và nguyên tử chỉ chiếm vỏn vẹn 5% vũ trụ. 27% là Vật chất tối (Dark Matter) - thứ keo vô hình giữ các thiên hà không bị văng ra khi quay. 68% còn lại là Năng lượng tối (Dark Energy) - lực đẩy bí ẩn đang xé toạc không gian với tốc độ ngày càng nhanh.',
      details: [
        { label: 'Tương tác vật chất thường', value: 'Chỉ thông qua lực hấp dẫn' },
        { label: 'Số phận vũ trụ', value: 'Dẫn tới Sự Xé Rách Lớn (Big Rip) hoặc Cái Chết Nhiệt (Big Freeze)' },
        { label: 'Dấu vết quan sát', value: 'Thấu kính hấp dẫn quanh các cụm thiên hà Bullet' }
      ],
      lore: 'Chúng ta như những sinh vật mù bơi trong một đại dương mà mình không thể nhìn thấy nước. Vũ trụ không được tạo ra cho chúng ta; nó thuộc về bóng tối vô hình của vật chất tối và năng lượng tối.'
    },

    // --- TINH VÂN & VƯỜN ƯƠM SAO ---
    {
      id: 'pillars-of-creation',
      category: 'nebulae',
      name: 'Cột Sáng Tạo (M16)',
      designation: 'Eagle Nebula Dust Pillars',
      subtitle: 'Những Cột Khói Thần Thoại Giữa Lòng Tinh Vân Đại Bàng',
      distance: '6.500 - 7.000 năm ánh sáng',
      mass: 'Hàng ngàn khối lượng Mặt Trời khí và bụi',
      temperature: '-260°C đến hàng ngàn °C tại vùng quang bốc hơi',
      diameter: 'Cột cao nhất dài 4 - 5 năm ánh sáng',
      image: 'assets/images/nebula.jpg',
      badge: 'Vườn Ươm Thần Thánh',
      color: '#10b981',
      quote: '"Nơi các nguyên tử hydro kết tụ để thắp sáng những vì sao đầu tiên."',
      overview: 'Cột Sáng Tạo là cấu trúc biểu tượng của thiên văn học, được chụp bởi kính Hubble và James Webb. Những ngón tay khí hydro và bụi vũ trụ khổng lồ này đang bị gió sao từ các ngôi sao trẻ siêu nóng gọt giũa và làm bốc hơi, đồng thời ép khí lại để thai nghén các hệ sao mới.',
      details: [
        { label: 'Thành phần', value: 'Khí Hydro phân tử lạnh và bụi silicat/carbon' },
        { label: 'Kích thước', value: 'Một đầu ngón tay của cột to bằng cả hệ Mặt Trời' },
        { label: 'Hiện tượng', value: 'Khối khí bốc hơi (Evaporating Gaseous Globules - EGGs)' },
        { label: 'Tương lai', value: 'Sẽ bị xói mòn hoàn toàn trong 1-2 triệu năm tới' }
      ],
      lore: 'Bức ảnh chụp bởi James Webb dưới ánh sáng hồng ngoại đã hé lộ hàng nghìn ngôi sao đỏ rực đang cựa mình thức giấc bên trong những kén bụi u ám dày đặc, minh chứng cho sự tuần hoàn vĩnh cửu của sinh thành và hủy diệt.'
    },
    {
      id: 'boomerang-nebula',
      category: 'nebulae',
      name: 'Tinh Vân Boomerang',
      designation: 'Protoplanetary Nebula',
      subtitle: 'Nơi Lạnh Nhất Vũ Trụ Tự Nhiên (-272.15°C)',
      distance: '5.000 năm ánh sáng',
      mass: 'Khí thoát ra từ sao già trung tâm',
      temperature: '1 Kelvin (-272.15°C - Lạnh hơn bức xạ nền vũ trụ)',
      diameter: '~2 năm ánh sáng',
      image: 'assets/images/nebula.jpg',
      badge: 'Băng Giá Tuyệt Đối',
      color: '#38bdf8',
      quote: '"Lạnh hơn cả hư không trống rỗng sâu thẳm nhất."',
      overview: 'Tinh vân Boomerang là vật thể tự nhiên lạnh nhất từng được ghi nhận trong toàn bộ vũ trụ quan sát được. Nhiệt độ của nó chỉ cao hơn độ không tuyệt đối (0 Kelvin) đúng 1 độ, thậm chí lạnh hơn cả bức xạ phông vi ba vũ trụ (2.7 Kelvin). Hiện tượng này xảy ra do sự giãn nở khí cực nhanh tựa như cơ chế làm lạnh của tủ lạnh vũ trụ.',
      details: [
        { label: 'Vận tốc gió sao', value: '164 km/s (Thổi bay 1 khối lượng Mặt Trời mỗi nghìn năm)' },
        { label: 'Nguyên lý nhiệt động', value: 'Làm lạnh đoạn nhiệt (Adiabatic expansion)' },
        { label: 'Kính viễn vọng nghiên cứu', value: 'Kính thiên văn ALMA tại sa mạc Atacama' }
      ],
      lore: 'Ở nhiệt độ 1 Kelvin, mọi chuyển động nguyên tử gần như đóng băng. Tinh vân Boomerang là một thoáng nhìn rợn gáy về viễn cảnh tương lai khi toàn bộ vũ trụ rơi vào Cái Chết Nhiệt (Heat Death).'
    },
    {
      id: 'helix-nebula',
      category: 'nebulae',
      name: 'Tinh Vân Con Mắt (Helix M57)',
      designation: 'NGC 7293 / Eye of God',
      subtitle: 'Ánh Nhìn Hư Vô Nhìn Xuống Trái Đất',
      distance: '655 năm ánh sáng',
      mass: 'Tàn dư lớp vỏ khí của sao lùn trắng',
      temperature: 'Khoảng 120.000°C tại lõi sao lùn',
      diameter: '5.74 năm ánh sáng',
      image: 'assets/images/nebula.jpg',
      badge: 'Mắt Thần Vũ Trụ',
      color: '#ec4899',
      quote: '"Tương lai 5 tỷ năm nữa của Mặt Trời chúng ta đang hiện hình ở đây."',
      overview: 'Thường được mệnh danh là "Con Mắt của Chúa", tinh vân Helix là một tinh vân hành tinh tuyệt đẹp sinh ra khi một ngôi sao giống như Mặt Trời cạn kiệt nhiên liệu hạt nhân và thổi bay các lớp vỏ ngoài vào không gian, để lộ một lõi sao lùn trắng nóng bỏng.',
      details: [
        { label: 'Thời gian mở rộng', value: 'Khoảng 10.600 năm tuổi' },
        { label: 'Cấu trúc', value: 'Vòng đệm hình bánh donut nhìn xiên góc' },
        { label: 'Các giọt khí sao chổi', value: 'Hàng nghìn nút thắt khí dài như đuôi sao chổi' }
      ],
      lore: 'Hình dáng tựa như một đồng tử khổng lồ phát sáng nhìn chăm chú vào hư không là lời nhắc nhở không thể lay chuyển: một ngày nào đó, Mặt Trời cũng sẽ trút bỏ lớp áo của mình và biến Trái Đất thành tro tàn lạnh lẽo.'
    },

    // --- HỆ MẶT TRỜI & CÁC HÀNH TINH ---
    {
      id: 'sol-sun',
      category: 'solar',
      name: 'Mặt Trời (Sol)',
      designation: 'Yellow Dwarf G2V Star',
      subtitle: 'Lò Lửa Hạt Nhân Cung Cấp Sinh Mệnh',
      distance: '1 AU (149.6 triệu km)',
      mass: '1.989 × 10^30 kg (99.86% khối lượng hệ)',
      temperature: '5.500°C (Bề mặt) / 15 triệu °C (Lõi)',
      diameter: '1.392.700 km (Gấp 109 lần Trái Đất)',
      image: 'assets/images/black_hole.jpg',
      badge: 'Chúa Tể Thái Dương',
      color: '#f59e0b',
      quote: '"Mỗi giây nuốt chửng 600 triệu tấn hydro để ban phát ánh sáng."',
      overview: 'Mặt Trời là ngôi sao kiểu quang phổ G2V nằm ở nhánh Orion của dải Ngân Hà. Nó là nguồn cội năng lượng cho mọi sinh quyển trên Trái Đất, nhưng cũng là một quả bom nhiệt hạch khổng lồ không ngừng đe dọa hành tinh bằng bão mặt trời và bức xạ hạt cực mạnh.',
      details: [
        { label: 'Phản ứng nhiệt hạch', value: 'Tổng hợp 4 proton thành hạt nhân Heli' },
        { label: 'Tuổi thọ hiện tại', value: '4.6 tỷ năm (~1/2 dòng đời)' },
        { label: 'Giai đoạn tương lai', value: 'Phình to thành Sao khổng lồ đỏ nuốt trọn Sao Thủy, Kim, Trái Đất' }
      ],
      lore: 'Trong 5 tỷ năm tới, khi lõi cạn kiệt hydro, Mặt Trời sẽ bành trướng dữ dội, thiêu rụi toàn bộ các đại dương của Trái Đất thành sa mạc thủy tinh nóng chảy trước khi sụp đổ thành một sao lùn trắng cô độc.'
    },
    {
      id: 'mercury-planet',
      category: 'solar',
      name: 'Sao Thủy (Mercury)',
      designation: 'Terrestrial Metalliferous Planet',
      subtitle: 'Hỏa Ngục Nung Nấu & Băng Giá Vĩnh Cửu',
      distance: '0.39 AU (57.9 triệu km từ Mặt Trời)',
      mass: '3.301 × 10^23 kg (0.055 Trái Đất)',
      temperature: '430°C (Ban ngày) / -180°C (Ban đêm)',
      diameter: '4.879 km (Chỉ nhỉnh hơn Mặt Trăng một chút)',
      image: 'assets/images/asteroid_belt.jpg',
      badge: 'Lõi Kim Loại Độc Trụ',
      color: '#94a3b8',
      quote: '"Nơi chênh lệch nhiệt độ ngày đêm khốc liệt nhất Thái Dương Hệ."',
      overview: 'Hành tinh gần Mặt Trời nhất không có bầu khí quyển bảo vệ. Ban ngày bề mặt của nó bị nung chảy ở nhiệt độ chì nóng chảy, trong khi ban đêm nhiệt độ rơi tự do xuống vực thẳm băng giá. Lõi sắt khổng lồ chiếm tới 85% bán kính hành tinh, khiến nó liên tục nguội đi và co rút lại, tạo ra những vách đá đứt gãy cao hàng ngàn mét.',
      details: [
        { label: 'Chu kỳ quỹ đạo', value: '88 ngày Trái Đất' },
        { label: 'Hiện tượng kỳ dị', value: 'Băng vĩnh cửu ẩn dưới đáy các miệng hố cực bắc không bao giờ thấy ánh sáng' },
        { label: 'Khí quyển', value: 'Hầu như bằng không (Exosphere mỏng manh)' }
      ],
      lore: 'Đứng trên bề mặt Sao Thủy, Mặt Trời trông to gấp 3 lần so với nhìn từ Trái Đất. Bầu trời luôn đen kịt ngay cả giữa trưa nắng thiêu đốt vì không có khí quyển để tán xạ ánh sáng.'
    },
    {
      id: 'venus-planet',
      category: 'solar',
      name: 'Sao Kim (Venus)',
      designation: 'Runaway Greenhouse Planet',
      subtitle: 'Lò Thiêu Axit Sunfuric & Áp Suất Nghiền Nát',
      distance: '0.72 AU (108.2 triệu km)',
      mass: '4.867 × 10^24 kg (0.815 Trái Đất)',
      temperature: '465°C (Nóng nhất trong hệ Mặt Trời)',
      diameter: '12.104 km (Hành tinh chị em song sinh)',
      image: 'assets/images/black_hole.jpg',
      badge: 'Địa Ngục Nhà Kính',
      color: '#f97316',
      quote: '"Hành tinh chị em của Trái Đất chọn con đường biến thành địa ngục."',
      overview: 'Sao Kim từng có thể có đại dương và khí hậu ôn hòa giống Trái Đất trong quá khứ, nhưng một hiệu ứng nhà kính mất kiểm soát (runaway greenhouse) đã biến nó thành chảo lửa khốc liệt nhất hệ Mặt Trời. Bầu khí quyển CO2 dày đặc tạo ra áp suất bề mặt gấp 92 lần Trái Đất — tương đương ở độ sâu 1.000m dưới đáy biển.',
      details: [
        { label: 'Mưa bề mặt', value: 'Mưa axit sunfuric đặc bốc hơi trước khi chạm đất' },
        { label: 'Chiều tự quay', value: 'Quay ngược chiều kim đồng hồ (Mặt Trời mọc hướng Tây)' },
        { label: 'Kỷ lục tàu thám hiểm', value: 'Tàu Venera của Liên Xô chỉ sống sót được tối đa 127 phút trước khi bị nghiền nát' }
      ],
      lore: 'Sao Kim là lời cảnh báo rùng mình từ vũ trụ về số phận của một hành tinh khi chu trình carbon sụp đổ và hiệu ứng nhà kính vượt qua ngưỡng cứu vãn.'
    },
    {
      id: 'terra-earth',
      category: 'solar',
      name: 'Trái Đất (Terra)',
      designation: 'Pale Blue Dot',
      subtitle: 'Phép Màu Cô Độc Giữa Hư Không Lạnh Giá',
      distance: '1 AU từ Mặt Trời (149.6 triệu km)',
      mass: '5.972 × 10^24 kg',
      temperature: 'Trung bình 15°C (-89°C đến 58°C)',
      diameter: '12.742 km',
      image: 'assets/images/nebula.jpg',
      badge: 'Ốc Đảo Sinh Mệnh',
      color: '#10b981',
      quote: '"Đốm xanh mờ nhạt — ngôi nhà duy nhất chúng ta từng biết."',
      overview: 'Hành tinh duy nhất trong vũ trụ được xác nhận có sự sống và nước lỏng bề mặt. Nhờ có từ trường bảo vệ từ lõi sắt nóng chảy và bầu khí quyển giàu oxy, Trái Đất như một ốc đảo mong manh trôi dạt giữa sa mạc không gian chết chóc.',
      details: [
        { label: 'Độ che phủ đại dương', value: '71% bề mặt' },
        { label: 'Vệ tinh đồng hành', value: 'Mặt Trăng (Ổn định độ nghiêng trục quay)' },
        { label: 'Lớp bảo vệ', value: 'Tầng ozone và từ quyển Van Allen' }
      ],
      lore: 'Nhìn từ ngoài rìa hệ Mặt Trời qua ống kính Voyager 1, Trái Đất chỉ là một hạt bụi lơ lửng trong một tia nắng. Mọi đế chế, mọi cuộc chiến tranh, mọi giọt nước mắt và nụ cười của loài người đều chỉ diễn ra trên hạt bụi cô độc ấy.'
    },
    {
      id: 'mars-planet',
      category: 'solar',
      name: 'Sao Hỏa (Mars)',
      designation: 'The Red Desert Planet',
      subtitle: 'Nghĩa Địa Sa Mạc Của Đại Dương Cổ Đại',
      distance: '1.52 AU (227.9 triệu km)',
      mass: '6.417 × 10^23 kg (0.107 Trái Đất)',
      temperature: '-60°C (Trung bình, xuống tới -125°C tại cực)',
      diameter: '6.779 km',
      image: 'assets/images/saturn.jpg',
      badge: 'Sa Mạc Bụi Đỏ',
      color: '#ef4444',
      quote: '"Gió rít qua những hẻm núi cạn khô nơi nước từng chảy tràn ngập tràn."',
      overview: 'Sao Hỏa là hành tinh chứa ngọn núi lửa lớn nhất hệ Mặt Trời: Olympus Mons (cao 22 km, gấp gần 3 lần đỉnh Everest) và hẻm núi Valles Marineris (dài hơn 4.000 km, sâu 7 km). Khi từ trường của nó chết đi 4 tỷ năm trước, gió mặt trời đã tước đoạt gần như toàn bộ khí quyển và đại dương của nó.',
      details: [
        { label: 'Màu sắc đỏ rỉ sét', value: 'Do oxit sắt (Fe2O3) phủ kín bề mặt' },
        { label: 'Vệ tinh', value: 'Phobos & Deimos (Hai tảng đá méo mó bị bắt giữ)' },
        { label: 'Nước hiện tại', value: 'Băng ngầm vĩnh cửu và mũ băng cực CO2/Nước' }
      ],
      lore: 'Sao Hỏa lưu giữ những bí mật về nguồn cội sự sống. Những cỗ xe tự hành Perseverance và Curiosity đang cần mẫn tìm kiếm tàn dư hóa thạch vi sinh vật cổ xưa trong các lòng hồ đã chết từ hàng tỷ năm trước.'
    },
    {
      id: 'jupiter-planet',
      category: 'solar',
      name: 'Sao Mộc (Jupiter)',
      designation: 'Gas Giant Superpower',
      subtitle: 'Chúa Tể Khí & Khiên Chắn Cứu Rỗi Trái Đất',
      distance: '5.20 AU (778.5 triệu km)',
      mass: '1.898 × 10^27 kg (Gấp 318 lần Trái Đất, gấp 2.5 lần mọi hành tinh khác gộp lại)',
      temperature: '-110°C (Tầng mây)',
      diameter: '139.820 km (Chứa được 1.300 Trái Đất)',
      image: 'assets/images/saturn.jpg',
      badge: 'Gã Khổng Lồ Khí',
      color: '#d97706',
      quote: '"Nếu nặng thêm một chút, nó đã có thể trở thành một ngôi sao thứ hai."',
      overview: 'Sao Mộc là người bảo hộ thầm lặng của Trái Đất. Trọng lực khổng lồ của nó hoạt động như một máy hút bụi vũ trụ, hút hoặc đẩy văng vô số sao chổi và tiểu hành tinh nguy hiểm ra khỏi quỹ đạo hướng về các hành tinh vòng trong. Vết Đỏ Lớn (Great Red Spot) là cơn bão phản lốc xoáy khổng lồ đã gầm rú suốt hơn 300 năm qua.',
      details: [
        { label: 'Số lượng mặt trăng', value: '95 vệ tinh tự nhiên đã xác nhận' },
        { label: 'Mặt trăng kỳ diệu Europa', value: 'Đại dương nước lỏng ngầm sâu 100km dưới vỏ băng' },
        { label: 'Mặt trăng núi lửa Io', value: 'Vật thể hoạt động núi lửa dữ dội nhất Thái Dương Hệ' }
      ],
      lore: 'Sâu bên trong Sao Mộc, áp suất hàng triệu atmosphere ép hydro thành trạng thái kim loại lỏng (metallic hydrogen), tạo ra một từ trường quái vật với các vành đai bức xạ ion hóa chết người đủ sức nướng chín mọi tàu thăm dò.'
    },
    {
      id: 'saturn-planet',
      category: 'solar',
      name: 'Sao Thổ (Saturn)',
      designation: 'Jewel of the Solar System',
      subtitle: 'Tuyệt Tác Vành Đai Băng Trong Hư Không',
      distance: '9.58 AU (1.43 tỷ km)',
      mass: '5.683 × 10^26 kg (95 lần Trái Đất)',
      temperature: '-140°C',
      diameter: '116.460 km',
      image: 'assets/images/saturn.jpg',
      badge: 'Chúa Tể Vành Đai',
      color: '#eab308',
      quote: '"Vương miện lộng lẫy bằng băng đang dần tan biến vào hư vô theo từng kỷ nguyên."',
      overview: 'Sao Thổ sở hữu hệ thống vành đai ngoạn mục nhất được tạo nên từ hàng tỷ hạt băng nước tinh khiết từ kích thước hạt bụi đến tảng đá to như ngôi nhà. Mặc dù rộng tới 282.000 km, vành đai này mỏng một cách kinh ngạc — trung bình chỉ dày khoảng 10 đến 30 mét!',
      details: [
        { label: 'Mật độ trung bình', value: '0.687 g/cm³ (Nhẹ hơn nước - có thể nổi trên bồn tắm khổng lồ)' },
        { label: 'Mặt trăng Titan', value: 'Mặt trăng duy nhất có khí quyển dày đặc và các biển hồ mê-tan lỏng' },
        { label: 'Cơn bão lục giác', value: 'Cấu trúc bão hình lục giác hoàn hảo bí ẩn tại cực Bắc' }
      ],
      lore: 'Các quan sát từ tàu Cassini cho thấy các vành đai đang bị hút vào bầu khí quyển của Sao Thổ dưới dạng "cơn mưa vành đai". Trong vòng 100-300 triệu năm nữa, toàn bộ chiếc vương miện băng giá này sẽ biến mất hoàn toàn.'
    },
    {
      id: 'uranus-planet',
      category: 'solar',
      name: 'Sao Thiên Vương (Uranus)',
      designation: 'Tilted Ice Giant',
      subtitle: 'Kẻ Lăn Ngang Trong Giá Rét -224°C',
      distance: '19.2 AU (2.87 tỷ km)',
      mass: '8.681 × 10^25 kg (14.5 lần Trái Đất)',
      temperature: '-224°C (Bầu khí quyển lạnh nhất trong các hành tinh)',
      diameter: '50.724 km',
      image: 'assets/images/nebula.jpg',
      badge: 'Kẻ Lăn Đơn Độc',
      color: '#06b6d4',
      quote: '"Quay nghiêng 98 độ — như một quả cầu bowling lăn trên quỹ đạo hư vô."',
      overview: 'Sao Thiên Vương là một gã khổng lồ băng (Ice Giant) với bầu khí quyển màu xanh ngọc lam do khí mê-tan hấp thụ ánh sáng đỏ. Điểm kỳ dị nhất là trục tự quay của nó bị nghiêng tới 97.8 độ — gần như nằm ngang trên mặt phẳng quỹ đạo, có thể do một vụ va chạm kinh thiên động địa với một thiên thể to bằng Trái Đất trong quá khứ sơ khai.',
      details: [
        { label: 'Chu kỳ quỹ đạo', value: '84 năm Trái Đất' },
        { label: 'Thời gian mùa', value: 'Mỗi cực chìm trong 42 năm ban ngày liên tục và 42 năm đêm đen' },
        { label: 'Vành đai tối', value: '13 vành đai bụi carbon tối đen mờ ảo' }
      ],
      lore: 'Trôi dạt ở rìa Thái Dương Hệ, Sao Thiên Vương toát lên vẻ cô tịch tuyệt đối. Nó phát ra rất ít nhiệt lượng nội tại so với các hành tinh khí khác, trở thành một viên ngọc băng câm lặng trong bóng tối.'
    },
    {
      id: 'neptune-planet',
      category: 'solar',
      name: 'Sao Hải Vương (Neptune)',
      designation: 'Dynamic Ice Giant',
      subtitle: 'Cơn Thịnh Nộ Bão Siêu Thanh 2.100 km/h',
      distance: '30.1 AU (4.5 tỷ km)',
      mass: '1.024 × 10^26 kg (17 lần Trái Đất)',
      temperature: '-214°C',
      diameter: '49.244 km',
      image: 'assets/images/nebula.jpg',
      badge: 'Bão Gió Siêu Thanh',
      color: '#3b82f6',
      quote: '"Nơi gió gầm rít vượt qua bức tường âm thanh trong đêm dài vĩnh cửu."',
      overview: 'Hành tinh xa nhất trong 8 hành tinh chính của Thái Dương Hệ. Mặc dù nhận được năng lượng mặt trời chỉ bằng 1/900 Trái Đất, Sao Hải Vương lại sở hữu những cơn gió quyển dữ dội nhất trong toàn bộ hệ Mặt Trời, đạt vận tốc hơn 2.100 km/h (gấp 1.5 lần vận tốc âm thanh Mach 1.7).',
      details: [
        { label: 'Phát hiện toán học', value: 'Hành tinh đầu tiên được tìm thấy bằng tính toán nhiễu loạn quỹ đạo trước khi nhìn qua kính viễn vọng' },
        { label: 'Mặt trăng quái vật Triton', value: 'Mặt trăng quay ngược chiều quỹ đạo với các mạch nước phun băng nitơ cao 8km' },
        { label: 'Mưa kim cương', value: 'Áp suất lõi nghiền nát metan thành các tinh thể kim cương rơi xuống lõi' }
      ],
      lore: 'Màu xanh thẳm như đại dương của Sao Hải Vương là một sự đánh lừa thị giác. Dưới lớp mây mù mịt là một địa ngục băng lỏng nóng bỏng, nơi các cơn bão tối khổng lồ xuất hiện và tan biến trong thinh lặng.'
    },
    {
      id: 'pluto-dwarf',
      category: 'solar',
      name: 'Sao Diêm Vương (Pluto)',
      designation: 'Kuiper Belt Dwarf Planet',
      subtitle: 'Trái Tim Nitơ Đóng Băng Rìa Thái Dương Hệ',
      distance: '39.5 AU (5.9 tỷ km)',
      mass: '1.303 × 10^22 kg (Chỉ bằng 0.2% Trái Đất)',
      temperature: '-230°C',
      diameter: '2.376 km',
      image: 'assets/images/asteroid_belt.jpg',
      badge: 'Cổng Vành Đai Kuiper',
      color: '#c084fc',
      quote: '"Vùng đất bị lãng quên mang trên mình hình bóng một trái tim băng giá."',
      overview: 'Từng là hành tinh thứ 9 cho đến khi bị phân loại lại thành hành tinh lùn năm 2006, Sao Diêm Vương là một thế giới phức tạp ngoài sức tưởng tượng. Năm 2015, tàu New Horizons đã gửi về hình ảnh tuyệt đẹp của bình nguyên Sputnik Planitia — một dòng sông băng nitơ khổng lồ hình trái tim đang co bóp và tuần hoàn liên tục.',
      details: [
        { label: 'Quỹ đạo lệch tâm', value: 'Quỹ đạo elip nghiêng 17 độ, đôi khi tiến gần Mặt Trời hơn cả Sao Hải Vương' },
        { label: 'Hệ đôi với Charon', value: 'Khóa nhật tâm với mặt trăng Charon (cả hai luôn hướng một mặt vào nhau)' },
        { label: 'Dãy núi băng nước', value: 'Những đỉnh núi băng cao 3.500m cứng như đá granite trong nhiệt độ âm sâu' }
      ],
      lore: 'Xa xôi và cô độc, Sao Diêm Vương đánh dấu biên giới giữa vương quốc của các hành tinh và vương quốc vô tận của hàng ngàn tỷ vật thể đóng băng trong vành đai Kuiper và mây Oort.'
    },

    // --- TIỂU HÀNH TINH & MẢNH VỠ VŨ TRỤ ---
    {
      id: 'asteroid-16-psyche',
      category: 'asteroids',
      name: 'Tiểu Hành Tinh 16 Psyche',
      designation: 'M-Type Metallic Asteroid',
      subtitle: 'Kho Báu Kim Loại 10.000 Triệu Tỷ USD & Lõi Tiền Hành Tinh Cổ',
      distance: '2.5 - 3.3 AU (Nằm trong Vành đai tiểu hành tinh chính)',
      mass: '2.41 × 10^19 kg (1% khối lượng vành đai)',
      temperature: '-130°C',
      diameter: '226 km',
      image: 'assets/images/asteroid_belt.jpg',
      badge: 'Lõi Kim Loại Tiền Hành Tinh',
      color: '#c99a4e',
      quote: '"Lõi sắt trơ trụi của một thế giới đã chết trước khi kịp sinh ra."',
      overview: '16 Psyche là một trong những tiểu hành tinh kỳ lạ và giá trị nhất hệ Mặt Trời. Khác với hầu hết các tiểu hành tinh bằng đá hoặc băng, Psyche gần như hoàn toàn được cấu tạo từ sắt, niken và vàng, bạch kim nguyên chất. Các nhà khoa học tin rằng nó chính là phần lõi kim loại lộ thiên của một tiền hành tinh (protoplanet) cổ xưa bị các vụ va chạm hủy diệt xé toạc lớp vỏ đá bên ngoài.',
      details: [
        { label: 'Giá trị ước tính', value: 'Khoảng 10.000 triệu tỷ USD (Lớn hơn nền kinh tế toàn cầu hàng trăm ngàn lần)' },
        { label: 'Sứ mệnh NASA Psyche', value: 'Phóng năm 2023, tiếp cận tiểu hành tinh vào năm 2029' },
        { label: 'Thành phần', value: '95% Sắt-Niken kim loại đặc quánh' }
      ],
      lore: 'Chạm tay vào 16 Psyche tương đương với việc nhìn sâu vào trung tâm Trái Đất mà con người không bao giờ có thể đào tới. Nó là chứng nhân câm lặng của thời kỳ hỗn mang khi hệ Mặt Trời còn đang thành hình.'
    },
    {
      id: 'asteroid-ceres',
      category: 'asteroids',
      name: 'Hành Tinh Lùn Ceres',
      designation: '1 Ceres / Queen of the Asteroid Belt',
      subtitle: 'Nữ Hoàng Vành Đai & Đại Dương Nước Ngầm Bí Ẩn',
      distance: '2.77 AU (413.7 triệu km)',
      mass: '9.39 × 10^20 kg (Chiếm 1/3 khối lượng toàn bộ Vành đai tiểu hành tinh)',
      temperature: '-106°C',
      diameter: '940 km',
      image: 'assets/images/asteroid_belt.jpg',
      badge: 'Nữ Hoàng Vành Đai',
      color: '#00f5d4',
      quote: '"Chứa nhiều nước ngọt hơn toàn bộ các đại dương trên Trái Đất gộp lại."',
      overview: 'Ceres là thiên thể lớn nhất trong vành đai tiểu hành tinh giữa Sao Hỏa và Sao Mộc. Tàu vũ trụ Dawn của NASA đã phát hiện những đốm sáng bí ẩn bên trong miệng hố Occator — các mỏ muối cacbonat natri kết tủa từ dung nham băng (cryovolcanism) phun trào từ một đại dương nước ngầm muối mặn sâu thẳm.',
      details: [
        { label: 'Phân loại', value: 'Hành tinh lùn duy nhất nằm trong hệ Mặt Trời vòng trong' },
        { label: 'Thành phần nước', value: 'Khoảng 25% khối lượng là nước đóng băng và khoáng ngậm nước' },
        { label: 'Đỉnh núi cô độc Ahuna Mons', value: 'Núi lửa bùn băng cao 4.000m trồi lên giữa sa mạc đá' }
      ],
      lore: 'Ceres là ứng viên hàng đầu cho các trạm tiếp tế nước và nhiên liệu tương lai của nhân loại khi loài người mở rộng sự hiện diện vào không gian sâu.'
    },
    {
      id: 'asteroid-apophis',
      category: 'asteroids',
      name: '99942 Apophis',
      designation: 'Potentially Hazardous Asteroid (PHA)',
      subtitle: 'Vị Thần Hỗn Loạn - Cuộc Chạm Trán Nghẹt Thở Năm 2029',
      distance: 'Quỹ đạo cắt ngang Trái Đất (Apollo-class)',
      mass: '6.1 × 10^10 kg (Khoảng 61 triệu tấn)',
      temperature: '-30°C đến 50°C',
      diameter: '370 mét (To hơn tháp Eiffel)',
      image: 'assets/images/oumuamua.jpg',
      badge: 'Mối Đe Dọa Khẩn Cấp',
      color: '#ef233c',
      quote: '"Vào ngày Thứ Sáu ngày 13 tháng 4 năm 2029, nó sẽ bay qua Trái Đất ở cự ly gần hơn cả vệ tinh địa tĩnh."',
      overview: 'Đặt theo tên vị thần hỗn mang và bóng tối của Ai Cập cổ đại, Apophis từng khiến cả thế giới nín thở khi được tính toán có nguy cơ va chạm với Trái Đất vào năm 2029 hoặc 2036. Mặc dù các tính toán mới nhất đã loại trừ khả năng va chạm trực tiếp trong thế kỷ này, vào ngày 13/4/2029, nó sẽ bay sượt qua Trái Đất ở khoảng cách chỉ 31.600 km — người thường có thể nhìn thấy nó bằng mắt trần lướt qua bầu trời đêm.',
      details: [
        { label: 'Khoảng cách tiếp cận 2029', value: '31.600 km (Gần hơn 10 lần khoảng cách tới Mặt Trăng)' },
        { label: 'Sức công phá tiềm năng', value: '1.200 Megatons TNT (Gấp 80.000 lần quả bom Hiroshima)' },
        { label: 'Tác động lực thủy triều', value: 'Lực hấp dẫn Trái Đất sẽ làm nứt vỡ và thay đổi trục quay của Apophis' }
      ],
      lore: 'Apophis là tiếng chuông cảnh tỉnh đối với toàn nhân loại: không gian không hề tĩnh lặng. Bất kỳ lúc nào, một tảng đá lang thang từ bóng tối cũng có thể viết lại lịch sử sinh quyển hành tinh.'
    },
    {
      id: 'interstellar-oumuamua',
      category: 'asteroids',
      name: '1I/\'Oumuamua',
      designation: 'First Interstellar Object',
      subtitle: 'Sứ Giả Liên Sao Bí Ẩn Vượt Xuyên Hệ Mặt Trời',
      distance: 'Đang rời khỏi Thái Dương Hệ với vận tốc 87 km/s',
      mass: 'Khoảng vài triệu tấn',
      temperature: '-220°C',
      diameter: 'Chiều dài 400m / Rộng 40m (Tỷ lệ 10:1 hình điếu xì gà)',
      image: 'assets/images/oumuamua.jpg',
      badge: 'Kẻ Xuyên Không Gian',
      color: '#8b5cf6',
      quote: '"Kẻ viếng thăm đầu tiên đến từ ngoài rìa Thái Dương Hệ — mang theo hình dáng chưa từng thấy."',
      overview: 'Được phát hiện vào tháng 10 năm 2017, \'Oumuamua (tiếng Hawaii có nghĩa là "Người trinh sát đến từ phương xa") là vật thể liên sao đầu tiên được con người quan sát thấy đi vào hệ Mặt Trời. Nó có hình dạng thuôn dài kỳ lạ tựa điếu xì gà hoặc chiếc đĩa phẳng, quay lộn nhào trong không gian và có gia tốc phi hấp dẫn bất thường khi bay ngang qua Mặt Trời.',
      details: [
        { label: 'Tốc độ siêu tưởng', value: 'Vận tốc tiếp cận 87.7 km/s (Không bị trói buộc bởi lực hấp dẫn Mặt Trời)' },
        { label: 'Bí ẩn gia tốc', value: 'Tăng tốc bất thường mà không hề có đuôi khí như sao chổi thông thường' },
        { label: 'Giả thuyết gây tranh cãi', value: 'Giáo sư Avi Loeb (Harvard) giả thuyết nó có thể là một cánh buồm ánh sáng nhân tạo của nền văn minh ngoài hành tinh' }
      ],
      lore: '\'Oumuamua đến trong im lặng và rời đi vào khoảng không liên sao vĩnh cửu. Chúng ta phát hiện ra nó quá muộn để có thể phóng tàu đuổi theo, để lại một trong những dấu hỏi lớn nhất và ám ảnh nhất lịch sử thiên văn hiện đại.'
    },
    {
      id: 'asteroid-chicxulub',
      category: 'asteroids',
      name: 'Kẻ Tuyệt Diệt Chicxulub',
      designation: 'Cretaceous-Paleogene Extinction Impactor',
      subtitle: 'Tảng Đá Hủy Diệt Triều Đại Khủng Long 66 Triệu Năm Trước',
      distance: 'Vết tích tại bán đảo Yucatán, Mexico',
      mass: '1.0 × 10^15 kg (Khoảng 1.000 tỷ tấn đá)',
      temperature: 'Hàng chục ngàn °C tại điểm va chạm',
      diameter: 'Đường kính khoảng 10 - 15 km',
      image: 'assets/images/asteroid_belt.jpg',
      badge: 'Hủy Diệt Sinh Quyển',
      color: '#ef4444',
      quote: '"Ngày một tảng đá rơi xuống từ bầu trời và xóa sổ 75% các loài sinh vật trên Trái Đất."',
      overview: '66 triệu năm trước, một tiểu hành tinh carbonaceous chondrite đường kính hơn 10km đã lao vào vùng biển nông nay là bán đảo Yucatán với vận tốc 72.000 km/h. Cú va chạm giải phóng năng lượng tương đương 100 triệu Megatons TNT (gấp 2 triệu lần quả bom Sa hoàng lớn nhất từng nổ), tạo ra hố va chạm rộng 180 km.',
      details: [
        { label: 'Hậu quả tức thì', value: 'Sóng thần cao hàng trăm mét, bão lửa toàn cầu quét sạch sinh quyển trong bán kính hàng ngàn km' },
        { label: 'Mùa đông va chạm', value: 'Bụi lưu huỳnh và bồ hóng che khuất ánh sáng mặt trời suốt cả thập kỷ, làm sụp đổ chuỗi thức ăn quang hợp' },
        { label: 'Di sản sinh học', value: 'Chấm dứt triều đại 165 triệu năm của loài khủng long, mở đường cho tổ tiên các loài thú có vú (bao gồm loài người) tiến hóa' }
      ],
      lore: 'Nếu tiểu hành tinh Chicxulub đến sớm hoặc muộn chỉ 15 phút do quỹ đạo quay của Trái Đất, nó đã có thể rơi vào đại dương sâu ở Thái Bình Dương thay vì thềm đá vôi giàu lưu huỳnh, và loài khủng long có thể vẫn đang thống trị Trái Đất ngày nay.'
    },

    // --- SỨ MỆNH & MẮT THẦN KHÔNG GIAN ---
    {
      id: 'voyager-1',
      category: 'humanity',
      name: 'Tàu Voyager 1',
      designation: 'Interstellar Space Probe',
      subtitle: 'Kẻ Lữ Hành Cô Độc Tiến Vào Không Gian Liên Sao',
      distance: 'Hơn 24 tỷ km (162 AU)',
      mass: '773 kg',
      temperature: '-270°C (Không gian sâu)',
      diameter: 'Ăng-ten chính 3.7 m',
      image: 'assets/images/bootes_void.jpg',
      badge: 'Sứ Giả Nhân Loại',
      color: '#3b82f6',
      quote: '"Mang theo chiếc Đĩa Vàng chứa âm thanh của Trái Đất vào sự im lặng vĩnh hằng."',
      overview: 'Phóng năm 1977, Voyager 1 là vật thể nhân tạo đi xa nhất trong lịch sử nhân loại. Năm 2012, nó chính thức vượt qua nhật quyển (Heliopause) để bước vào không gian liên sao (Interstellar space). Nguồn pin nhiệt điện hạt nhân của nó đang cạn kiệt dần, và nó sẽ sớm câm lặng mãi mãi.',
      details: [
        { label: 'Thời gian trễ tín hiệu', value: 'Hơn 22.5 giờ một chiều' },
        { label: 'Hành trang đặc biệt', value: 'Chiếc Đĩa Vàng (Golden Record) lưu giữ hình ảnh & âm thanh' },
        { label: 'Vận tốc hiện tại', value: 'Khoảng 61.000 km/h (17 km/s)' },
        { label: 'Điểm đến tiếp theo', value: 'Cách sao Gliese 445 khoảng 1.6 năm ánh sáng sau 40.000 năm nữa' }
      ],
      lore: 'Một ngày nào đó, khi nhân loại có thể đã không còn trên Trái Đất, con tàu kim loại nhỏ bé này vẫn sẽ tiếp tục trôi vô định qua hàng triệu năm giữa các vì sao, như một hóa thạch công nghệ kể câu chuyện: đã từng có một giống loài biết ước mơ.'
    },
    {
      id: 'jwst-telescope',
      category: 'humanity',
      name: 'Kính Viễn Vọng James Webb (JWST)',
      designation: 'Next-Gen Infrared Space Observatory',
      subtitle: 'Mắt Thần Nhìn Ngược Về Bình Minh Vũ Trụ',
      distance: '1.5 triệu km (Điểm Lagrange L2)',
      mass: '6.500 kg',
      temperature: '-233°C (Tấm chắn nhiệt bảo vệ)',
      diameter: 'Gương mạ vàng 6.5 m (18 phân đoạn lục giác)',
      image: 'assets/images/nebula.jpg',
      badge: 'Đỉnh Cao Công Nghệ',
      color: '#eab308',
      quote: '"Xuyên qua màn bụi dày đặc để chiêm ngưỡng những ngôi sao đầu tiên được thắp lên sau Vụ Nổ Lớn."',
      overview: 'JWST là kỳ quan công nghệ thiên văn học phức tạp nhất từng được chế tạo. Hoạt động ở bước sóng hồng ngoại với tấm chắn nhiệt kích thước bằng sân tennis, Webb cho phép các nhà khoa học nhìn ngược thời gian hơn 13.5 tỷ năm để chứng kiến sự ra đời của những thiên hà cổ xưa nhất vũ trụ.',
      details: [
        { label: 'Phát hiện tiêu biểu', value: 'Phát hiện thiên hà JADES-GS-z14-0 chỉ 290 triệu năm sau Big Bang' },
        { label: 'Phân tích khí quyển', value: 'Tìm kiếm hơi nước, mê-tan và dấu hiệu sinh học trên ngoại hành tinh' },
        { label: 'Nhiệt độ hoạt động MIRI', value: 'Chỉ 7 Kelvin (-266°C)' }
      ],
      lore: 'Những bức ảnh từ JWST không chỉ là khoa học, chúng là những tác phẩm nghệ thuật vũ trụ làm rung động tâm hồn, mở ra những bí mật chôn giấu phía sau những bức tường bụi tối đen của không gian vĩnh hằng.'
    }
  ],

  // --- NIÊN ĐẠI VŨ TRỤ (TIMELINE: BIG BANG TO HEAT DEATH) ---
  timeline: [
    {
      era: 'Thuở Sơ Khai',
      time: '0 giây đến 380.000 năm',
      title: 'Vụ Nổ Lớn & Bức Xạ Tàn Dư (Big Bang & Recombination)',
      desc: 'Không-thời gian và vật chất bùng nổ từ một điểm kỳ dị vô hạn. Vũ trụ giãn nở lạm phát với tốc độ vượt xa ánh sáng. Khi vũ trụ nguội xuống 3.000 Kelvin, các electron kết hợp với proton để tạo thành nguyên tử hydro đầu tiên, giải phóng ánh sáng tự do tạo thành Bức Xạ Nền Vi Ba (CMB).',
      vibe: 'Ánh sáng chói lòa xé tan hư vô'
    },
    {
      era: 'Kỷ Nguyên Tối',
      time: '380.000 - 150 triệu năm',
      title: 'Đêm Dài Vô Tận Của Vũ Trụ (Cosmic Dark Ages)',
      desc: 'Không có ngôi sao nào tồn tại. Vũ trụ là một đại dương khí hydro và heli lạnh lẽo, tối tăm mù mịt. Dưới tác động âm thầm của mạng lưới vật chất tối, các đám mây khí bắt đầu co cụm lại.',
      vibe: 'Sự tĩnh lặng tuyệt đối và lạnh lẽo'
    },
    {
      era: 'Kỷ Nguyên Tinh Tú (Hiện Tại)',
      time: '150 triệu năm - 100 nghìn tỷ năm',
      title: 'Kỷ Nguyên Của Ánh Sáng & Sự Sống (Stelliferous Era)',
      desc: 'Những ngôi sao khổng lồ đầu tiên phát nổ (Quần thể III), tạo ra các nguyên tố nặng như carbon, oxy, sắt. Các thiên hà xoắn ốc hình thành, các hệ hành tinh ra đời và sự sống thức tỉnh. Đây là thời đại hoàng kim rực rỡ nhất nhưng chỉ là một cái chớp mắt trong toàn bộ dòng thời gian.',
      vibe: 'Hàng trăm tỷ thiên hà bùng cháy'
    },
    {
      era: 'Kỷ Nguyên Thoái Hóa',
      time: '10^14 - 10^40 năm sau',
      title: 'Cái Chết Của Các Vì Sao (Degenerate Era)',
      desc: 'Các đám mây khí cạn kiệt, không còn ngôi sao mới nào được sinh ra. Các ngôi sao đỏ lùn cuối cùng tàn lụi. Vũ trụ chỉ còn lại sao lùn trắng, sao neutron lạnh ngắt và hố đen trôi dạt trong bóng đêm dày đặc.',
      vibe: 'Hoàng hôn vĩnh cửu của vũ trụ'
    },
    {
      era: 'Kỷ Nguyên Hố Đen',
      time: '10^40 - 10^100 năm sau',
      title: 'Thời Đại Của Những Quái Vật Hư Vô (Black Hole Era)',
      desc: 'Vật chất thông thường tự phân rã (proton decay). Hố đen trở thành những cấu trúc vật chất duy nhất còn tồn tại trong vũ trụ. Chúng lặng lẽ nuốt chửng nhau và dần dần bốc hơi cực chậm thông qua bức xạ Hawking qua hàng tỷ tỷ tỷ năm.',
      vibe: 'Bóng tối nuốt chửng chính mình'
    },
    {
      era: 'Cái Chết Nhiệt',
      time: '10^100 năm trở đi',
      title: 'Sự Im Lặng Vĩnh Cửu (The Big Freeze / Heat Death)',
      desc: 'Hố đen cuối cùng phát nổ và bốc hơi hoàn toàn. Vũ trụ đạt trạng thái entropy cực đại. Không còn năng lượng, không còn nhiệt độ (tiệm cận 0 Kelvin), không còn bất kỳ sự kiện nào có thể xảy ra. Thời gian mất đi ý nghĩa. Chỉ còn lại hư vô vĩnh hằng.',
      vibe: 'Sự im lặng tuyệt đối không hồi kết'
    }
  ],

  // --- THANG ĐO QUY MÔ VŨ TRỤ ---
  scales: [
    { name: 'Hạt Hạ Nguyên Tử (Proton)', sizeMeters: 1e-15, display: '0.000000000000001 m', desc: 'Viên gạch cấu tạo nên mọi vật chất bạn chạm vào.' },
    { name: 'Con Người (Human)', sizeMeters: 1.7, display: '1.7 m', desc: 'Một sinh vật mong manh mang ý thức tự nhìn lại vũ trụ.' },
    { name: 'Hành Tinh Trái Đất', sizeMeters: 1.27e7, display: '12.742 km', desc: 'Tất cả lịch sử loài người diễn ra tại đây.' },
    { name: 'Mặt Trời (Sol)', sizeMeters: 1.39e9, display: '1.392.700 km', desc: 'Chứa được 1.3 triệu Trái Đất bên trong.' },
    { name: 'Ngôi Sao Siêu Khổng Lồ Stephenson 2-18', sizeMeters: 3e12, display: '3 tỷ km', desc: 'Ngôi sao lớn nhất: Ánh sáng mất 9 tiếng để bay vòng quanh.' },
    { name: 'Hố Đen TON 618', sizeMeters: 3.9e14, display: '390 tỷ km', desc: 'Nuốt trọn toàn bộ hệ Mặt Trời 11 lần.' },
    { name: 'Dải Ngân Hà (Milky Way)', sizeMeters: 9.46e20, display: '100.000 năm ánh sáng', desc: 'Chứa 100-400 tỷ ngôi sao.' },
    { name: 'Khoảng Trống Boötes', sizeMeters: 3.12e24, display: '330 triệu năm ánh sáng', desc: 'Vực thẳm hư vô khổng lồ cô quạnh.' },
    { name: 'Mạng Lưới Vũ Trụ Khả Kiến', sizeMeters: 8.8e26, display: '93 tỷ năm ánh sáng', desc: 'Chứa hơn 2.000 tỷ thiên hà trong tầm mắt nhân loại.' }
  ]
};
