const d = (e) => document.getElementById(e).style

export default function NavFilterFunctions(id, idCathegory) {
  d('allLi').textDecoration='none'
  d('webLi').textDecoration='none'
  d('desktopLi').textDecoration='none'
  d('mobileLi').textDecoration='none'
  d('softwareLi').textDecoration='none'

  if(id==='all'){
    d('devListWebSection').display='flex';
    d('devListDesktopSection').display='flex';
    d('devListMobileSection').display='flex';
    d('devListSoftwareSection').display='flex';
    return(
      d(idCathegory).textDecoration='overline underline'
    )
  }

  d('devListWebSection').display='none';
  d('devListDesktopSection').display='none';
  d('devListMobileSection').display='none';
  d('devListSoftwareSection').display='none';

  
  return (
    d(id).display='flex',
    d(idCathegory).textDecoration='overline underline'
    )

}
