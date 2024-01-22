//  fungsi option untuk program studi 
  function programStudi() {
    var fakultas = document.getElementById("fakultas").value;
    var programStudiDropdown = document.getElementById("kelas");

    programStudiDropdown.options.length = 0;

    switch (fakultas) {
        case "FAKULTAS ILMU KOMPUTER":
        addOption(programStudiDropdown, "S1-TEKNIK INFORMATIKA");
        addOption(programStudiDropdown, "S1-TEKNOLOGI INFORMASI");
        addOption(programStudiDropdown, "S1-SISTEM INFORMASI");
        addOption(programStudiDropdown, "D3-TEKNIK INFORMATIKA");
        break;
      case "FAKULTAS EKONOMI BISNIS":
        addOption(programStudiDropdown, "S1-ILMU EKONOMI");
        addOption(programStudiDropdown, "S1-ILMU MANAJEMEN");
        addOption(programStudiDropdown, "S1-AKUNTANSI");
        addOption(programStudiDropdown, "D3-ILMU EKONOMI");
        break;
      case "FAKULTAS SOSIAL":
        addOption(programStudiDropdown, "S1-HUBUNGAN INTERNATIONAL");
        addOption(programStudiDropdown, "S1-ILMU KOMUNIKASI");
        addOption(programStudiDropdown, "S1-TATA PEMBANGUNAN KOTA");
        addOption(programStudiDropdown, "S1-MULTIMEDIA BROADCASTING");
    }
  }

  function addOption(select, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text || value;
    select.add(option);
  }