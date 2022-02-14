var recordset = [
  { id: '1', locat: '2115315', type: 'Bautizo',    rmsID: 'TH-1951-23240-52713-77', title: 'Carúpano - Santa Rosa 1890-91, 1908-12', size: 729 },
	{ id: '2', locat: '2115315', type: 'Defuncion',  rmsID: 'M99B-7H4', title: 'Carúpano - Santa Catalina 1920-1938', size: 33 },
	{ id: '3', locat: '2423652', type: 'Bautizo',    rmsID: 'M9SM-SJ3', title: 'Güiria - Inmaculada Concpción 1881-1898', size: 0 },
	{ id: '4', locat: '2115315', type: 'Matrimonio', rmsID: 'M99Y-2P1', title: 'Carúpano - Santa Rosa 1896-1913', size: 101 },
	{ id: '5', locat: '2423652', type: 'Matrimonio', rmsID: 'M99Y-743', title: 'Güiria - Inmaculada Concpción 1862-1907', size: 0 },
	{ id: '7', locat: '2104138', type: 'Matrimonio', rmsID: 'M99B-QGN', title: 'Río Caribe - San Miguel 1907-1951', size: 0 },
  { id: '9', locat: '2118623', type: 'Bautizo',    rmsID: 'M99T-ZY2', title: 'El Pilar - Nuestra Señora del Pilar 1832-1836', size: 0 },
	{ id:'10', locat: '2115315', type: 'Bautizo',    rmsID: 'M99Y-2PK', title: 'Carúpano - Santa Rosa 1925-1928', size: 200 },
	{ id:'11', locat: '2115315', type: 'Bautizo',    rmsID: 'M99B-7H9', title: 'Carúpano - Santa Catalina 1920-1923', size: 145 },
	{ id:'12', locat: '2115315', type: 'Matrimonio', rmsID: 'M99Y-2PB', title: 'Carúpano - Santa Rosa 1874-1896', size: 149 },
	{ id:'13', locat: '2115315', type: 'Matrimonio', rmsID: 'M99B-7HW', title: 'Carúpano - Santa Catalina 1920-1946', size: 0 },
	{ id:'14', locat: '442650',  type: 'Matrimonio', rmsID: 'TH-909-65256-140773-14', title: 'Tucupita - Reg. Civil 1938, 1950', size: 0 },
  { id:'15', locat: '5366',    type: 'Defuncion',  rmsID: 'M99T-85P', title: 'Caicara - Santo Domingo 1912-1966', size: 83 },
  { id:'16', locat: '2423652', type: 'Matrimonio', rmsID: 'M99Y-74Q', title: 'Güiria - Inmaculada Concpción 1916-1944', size: 0 },
  { id:'17', locat: '', type: '',    rmsID: '', title: '', size: 0 },
  { id:'18', locat: '', type: '',    rmsID: '', title: '', size: 0 },
  { id:'19', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SN1', title: 'Güiria - Inmaculada Concepción 1835-1845', size: 0 },
  { id:'20', locat: '5366', type: 'Defunción', rmsID: 'TH-909-60370-81718-24', title: 'Caicara - Santo Domingo 1980-2014', size: 0 },
  { id:'21', locat: '1136041', type: 'Bautizo', rmsID: 'TH-909-83452-15137-1', title: 'La Asuncion - La Asuncion 1953', size: 33 },
  { id:'22', locat: '5366', type: 'Matrimonio', rmsID: 'M99T-852', title: 'Caicara - Santo Domingo 1895-1914', size: 0 },
  { id:'23', locat: '445650', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Tucupita - San Jose 1906, 1908-1910', size: 0 },
	{ id:'24', locat: '5355', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Pedernales - San Isidro 1907, 1910', size: 0 },
	{ id:'25', locat: '445650', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Tucupita - El Calvario Feb 1910', size: 0 },
	{ id:'26', locat: '5355', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Macareo - Ermita Ene 1910', size: 0 },
	{ id:'27', locat: '5355', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Macareito - Caserio Feb 1910', size: 0 },
	{ id:'28', locat: '5355', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Curiapo - Santa Barbara Ene 1910', size: 0 },
	{ id:'29', locat: '5355', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Amacuro - San Jose Ene 1910', size: 0 },
	{ id:'30', locat: '5355', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'La Horqueta - Caserio Jul 1910', size: 0 },
  { id:'31', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJM', title: 'Güiria - Inmaculada Concepción 1850-1862', size: 0 },
  { id:'32', locat: '2115315', type: 'Matrimonio', rmsID: 'M99Y-2PT', title: 'Carúpano - Santa Rosa 1835-1836, 1842-1847', size: 0 },
	{ id:'34', locat: '5366', type: 'Sin Imagen', rmsID: '', title: 'Caicara - Todas las Parroquias ', size: 0 },
	{ id:'35', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJ9', title: 'Güiria - Inmaculada Concepción 1881-1898', size: 0 },
	{ id:'36', locat: '5368', type: 'Bautizo', rmsID: 'M99R-59M', title: 'Porlamar - Santisima Trinidad 1971-1975', size: 0 },
  { id:'37', locat: '2115315', type: 'Bautizo', rmsID: 'M99Y-2PL', title: 'Carúpano - Santa Rosa 1929-1933', size: 200 },
  { id:'38', locat: '2115315', type: 'Bautizo', rmsID: 'M99B-7H3', title: 'Carúpano - Santa Rosa 1925-1928', size: 200 },
  { id:'39', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJS', title: 'Güiria - Inmaculada Concpción 1872-1881', size: 200 },
  { id:'40', locat: '2115315', type: 'Bautizo', rmsID: 'M99Y-2P2', title: 'Carúpano - Santa Rosa 1928-1929', size: 107 },
  { id:'41', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJQ', title: 'Güiria - Inmaculada Concepción 1885-1893', size: 192 },
  { id:'42', locat: '2115315', type: 'Bautizo', rmsID: 'M99B-7HQ', title: 'Carúpano - Santa Catalina 1928-1931', size: 200 },
  { id:'43', locat: '2115315', type: 'Bautizo', rmsID: 'M99B-7HS', title: 'Carúpano - Santa Catalina 1921-1925', size: 205 },
  { id:'44', locat: '2117896', type: 'Matrimonio', rmsID: 'M99Y-JC9', title: 'Punta de Piedras - San Simon 1890-1891', size: 6 },
  { id:'45', locat: '2111147', type: 'Matrimonio', rmsID: 'M99Y-74H', title: 'Macuro - San Cristobal 1931-1940', size: 9 },
  { id:'46', locat: '2111147', type: 'Bautizo', rmsID: 'M99Y-744', title: 'Macuro - San Cristobal 1931-1942', size: 95 },
  { id:'47', locat: '2115315', type: 'Bautizo', rmsID: 'M99Y-2PV', title: 'Carúpano - Santa Rosa 1920-1925', size: 180 },
  { id:'48', locat: '2115315', type: 'Matrimonio', rmsID: 'M9SF-PZL', title: 'Carúpano - Santa Rosa 1913-1940', size: 200 },
  { id:'50', locat: '2104609', type: 'Bautizo', rmsID: 'M99Y-254', title: 'San José de Areocuar - San Jose 1887-1893', size: 147 },
  { id:'51', locat: '2104609', type: 'Defunción', rmsID: 'M99Y-25K', title: 'San José de Areocuar - San Jose 1909-1928', size: 61 },
  { id:'52', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJ7', title: 'Guiria - Inmaculada Concepción 1893-1897', size: 147 },
  { id:'53', locat: '2104609', type: 'Bautizo', rmsID: 'M99Y-25H', title: 'San Jose de Aerocuar - San Jose 1893-1907', size: 0 },
  { id:'54', locat: '2115491', type: 'Matrimonio', rmsID: 'M9SM-SYL', title: 'Cariaco - San Felipe 1915-1950', size: 74 },
  { id:'55', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJW', title: 'Guiria - Inmaculada Concepción 1897-1907', size: 389 },
  { id:'56', locat: '2109974', type: 'Bautizo', rmsID: 'M948-VC5', title: 'Guaraunos - Guarauno 1892-1895', size: 92 },
  { id:'57', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJ4', title: 'Guiria - Inmaculada Concepción 1907-1912', size: 193 },
  { id:'58', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJH', title: 'Guiria - Inmaculada Concepción 1912-1917', size: 0 },
  { id:'59', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJC', title: 'Guiria - Inmaculada Concepción 1917-1920', size: 100 },
  { id:'60', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJZ', title: 'Guiria - Inmaculada Concepción 1920-1926', size: 203 },
  { id:'61', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJ8', title: 'Guiria - Inmaculada Concepción 1926-1929', size: 212 },
];

var localidades = [ 
    { estado:'Sucre', 
      code:293, 
      cities : [
        {city:'Cariaco', code:6}, 
      	{city:'Carúpano', code:1}, 
      	{city:'El Pilar', code:7},
        //{city:'Guaraunos', code:22}, 
      	{city:'Güiria', code:2},
        {city:'Macuro', code:21},
        {city:'Río Caribe', code:3},
        {city:'San José de Areocuar', code:5},
      ]
  	},
    { estado:'Delta Amacuro', 
      code:287, 
      cities : [
        {city:'Amacuro', code:18},
        {city:'Curiapo', code:13},
        {city:'La Horqueta', code:15},
        {city:'Macareito', code:14},
        {city:'Macareo', code:17},
        {city:'Pedernales', code:16},
        {city:'Tucupita', code:8},
        
      ]
  	},
    { estado:'Monagas', 
      code:291, 
      cities : [
        {city:'Caicara', code:9},
      ]
    },
    { estado:'Nueva Esparta', 
      code:295, 
      cities : [
        {city:'La Asunción', code:10},
        {city:'Porlamar', code:12},
        {city:'Punta de Piedras', code:19},
      ]
    },
    // { estado:'Estado', 
    //   code:Codigo, 
    //   cities : [
    //     { city:'Ciudad', code:codigo}
    //   ]
    // }
 ];



var projects = [
  '<tr><td>Sucre</td><td>Carúpano</td><td>Bautizos</td><td>1899-1907</td></tr>',
  '<tr><td>     </td><td>        </td><td>Bautizos</td><td>1920-1925</td></tr>',
  '<tr><td>     </td><td>Guiria  </td><td>Bautizos</td><td>1929-1936</td></tr>',
];



  //Cambiar fecha de actualizacion
  var up_date = "Febrero 3, 2022";
  var fecha = document.getElementById('update');
  fecha.innerHTML = up_date;



  var updates = [
  '<li class="list-group-item"><small>02/03/2022 | Finalizado - <a href="https://www.familysearch.org/records/images/image-details?page=2&place=2423652&rmsId=M9SM-SJ8&imageIndex=0&singleView=true">Tomo 13</a> de <a href="https://www.familysearch.org/wiki/es/G%C3%BCiria,_Sucre,_Venezuela_-_Genealog%C3%ADa">Guiria</a> - Bautizos 1926-1929 Inmaculada Concepción.</small></li>',
  '<li class="list-group-item"><small>01/24/2022 | Agregada página con Lista de <a href="../nombres/">Nombres</a> en Índice Genealógico.</small></li>',
  '<li class="list-group-item"><small>01/23/2022 | Finalizado - <a href="https://www.familysearch.org/records/images/image-details?page=2&place=2423652&rmsId=M9SM-SJZ&imageIndex=0&singleView=true">Tomo 12</a> de <a href="https://www.familysearch.org/wiki/es/G%C3%BCiria,_Sucre,_Venezuela_-_Genealog%C3%ADa">Guiria</a> - Bautizos 1920-1926 Inmaculada Concepción.</small></li>',
  '<li class="list-group-item"><small>01/12/2022 | Finalizado - <a href="https://www.familysearch.org/records/images/image-details?page=2&place=2423652&rmsId=M9SM-SJC&imageIndex=0&singleView=true">Tomo 11</a> de <a href="https://www.familysearch.org/wiki/es/G%C3%BCiria,_Sucre,_Venezuela_-_Genealog%C3%ADa">Guiria</a> - Bautizos 1917-1920 Inmaculada Concepción.</small></li>',
  '<li class="list-group-item"><small>01/11/2022 | Agregados - Bautizos 1902-1904 Santa Rosa - Carupano.</small></li>',
  '<li class="list-group-item"><small>01/03/2021 | Finalizado <a href="https://www.familysearch.org/records/images/image-details?page=2&place=2423652&rmsId=M9SM-SJH&imageIndex=0&singleView=true">Tomo 10</a> de <a href="https://www.familysearch.org/wiki/es/G%C3%BCiria,_Sucre,_Venezuela_-_Genealog%C3%ADa">Guiria</a> - Bautizos 1912-1914.</small></li>',
  '<li class="list-group-item"><small>01/01/2022 | Agregada página con Lista de <a href="../apellidos/">Apellidos</a> en Índice Genealógico.</small></li>',
  '<li class="list-group-item"><small>12/25/2021 | Finalizado <a href="https://www.familysearch.org/records/images/image-details?page=2&place=2423652&rmsId=M9SM-SJ4&imageIndex=0&singleView=true">Tomo 9</a> de <a href="https://www.familysearch.org/wiki/es/G%C3%BCiria,_Sucre,_Venezuela_-_Genealog%C3%ADa">Guiria</a> - Bautizos 1907-1912.</small></li>',
  '<li class="list-group-item"><small>12/24/2021 | Primeros 10.000 índices cambiados de imágenes a registros.</small></li>',
  '<li class="list-group-item"><small>12/13/2021 | Alcanzados los 50 mil índices.</small></li>',
  '<li class="list-group-item"><small>01/28/2021 | Se abre una página de <a href="https://www.facebook.com/IndiceGenealogico/">Facebook</a> para Índice Genealógico.</small></li>',
  '<li class="list-group-item"><small>10/25/2020 | Se da inicio al proyecto de Índice Genealógico.</small></li>', 
];