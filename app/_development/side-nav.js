export const humiraLocalModule = angular.module( 'mss' )
.controller( 'SideNavController', function ( $mdSidenav ) {
    const vm = this;
    vm.toggleSidenav = () => {
        $mdSidenav( 'left' ).toggle();
    };
    vm.closeSidenav = () => {
        $mdSidenav( 'left' ).close();
    };
} );
