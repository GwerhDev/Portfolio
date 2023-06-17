function d(e) { return document.getElementById(e).style }

export default function NavFilterFunctions(id, idCathegory) {
  d('allLi').textDecoration='none';
  d('webLi').textDecoration='none';
  d('desktopLi').textDecoration='none';
  d('mobileLi').textDecoration='none';
  d('softwareLi').textDecoration='none';
  
  if(id==='all'){
    d('devListWebSection').display='flex';
    d('devListDesktopSection').display='flex';
    d('devListMobileSection').display='flex';
    d('devListSoftwareSection').display='flex';
    if(idCathegory) return d(idCathegory).textDecoration='overline underline';
    else return;
  }
  
  d('devListWebSection').display='none';
  d('devListDesktopSection').display='none';
  d('devListMobileSection').display='none';
  d('devListSoftwareSection').display='none';
  
  
  if(!idCathegory) return (
    d(id).display='flex'
    )
  return (
    d(id).display='flex',
    d(idCathegory).textDecoration='overline underline'
  )
}
