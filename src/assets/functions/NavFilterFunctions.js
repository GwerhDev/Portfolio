function d(e) { return document.getElementById(e).style }

export function NavFilterFunctions(id, idCathegory) {
  d('webLi').backgroundColor='transparent';
  d('desktopLi').backgroundColor='transparent';
  d('mobileLi').backgroundColor='transparent';
  d('softwareLi').backgroundColor='transparent';
  
  d('devListWebSection').display='none';
  d('devListDesktopSection').display='none';
  d('devListMobileSection').display='none';
  d('devListSoftwareSection').display='none';
  
  if(!idCathegory) return d(id).display='flex';
  
  return (
    d(id).display='flex',
    d(idCathegory).backgroundColor='#171717d5'
  )
}

export function NavFilterEnterFunctions(idCathegory) {
  d(idCathegory).backgroundColor='#171717d5'
}

export function NavFilterLeaveFunctions(filter, idCathegory) {
  if(!filter) return d(idCathegory).backgroundColor='transparent';
  return;
}