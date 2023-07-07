function d(e) { return document.getElementById(e).style }

export default function NavFilterFunctions(id, idCathegory) {
  d('webLi').textDecoration='none';
  d('desktopLi').textDecoration='none';
  d('mobileLi').textDecoration='none';
  d('softwareLi').textDecoration='none';
  
  d('devListWebSection').display='none';
  d('devListDesktopSection').display='none';
  d('devListMobileSection').display='none';
  d('devListSoftwareSection').display='none';
  
  if(!idCathegory) return d(id).display='flex';
  
  return (
    d(id).display='flex',
    d(idCathegory).textDecoration='overline underline'
  )
}
