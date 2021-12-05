/*
    By Osvaldas Valutis, www.osvaldas.info
    Available for use under the MIT License
*/

'use strict';

$( function() {
    $(document).on('click','.js-inputfile',function () {
        $( '.js-inputfile' ).each( function()
        {
            var $input	 = $( this ).find( '.js-inputfile-input' ),
                $label	 = $( this ).find( '.js-inputfile-label' ),
                labelVal = $label.html();

            $input.on( 'change', function( e )
            {

                var fileName = '';

                if( this.files && this.files.length > 1 )
                    fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                else if( e.target.value )
                    fileName = e.target.value.split( '\\' ).pop();

                if( fileName )
                    $label.find( 'span' ).html( fileName );
                else
                    $label.html( labelVal );


            });

            // Firefox bug fix
            $input
                .on( 'focus', function(){ $input.addClass( 'form__input--file-hasfocus' ); })
                .on( 'blur', function(){ $input.removeClass( 'form__input--file-hasfocus' ); });
            $input
                .on( 'hover', function(){ $input.addClass( 'form__input--file-hashover' ); })
                .on( 'blur', function(){ $input.removeClass( 'form__input--file-hashover' ); });

        });
    });

});// ready

