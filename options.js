(function ($) {
    $('document').ready(function () {
        var username = $('#username');
        var password = $('#password');
        var autoLogin = $('#auto-login');
        var saveButton = $('#save-button');

        // Load configuration and update fields value
        chrome.storage.sync.get('config', function (items) {
            var config = {};

            if (items.config) {
                config = JSON.parse(items.config);
            }

            username.val(config.username || null);
            password.val(config.password || null);

            if (config.autoLogin) {
                autoLogin.prop('checked', true);
            }
        });

        // Save button, saves configuration
        saveButton.click(function () {
            var config = {
                username: username.val(),
                password: password.val(),
                autoLogin: autoLogin.prop('checked')
            };

            chrome.storage.sync.set({ config: JSON.stringify(config)}, function () {
                // Workaround to make bootstrap's .hide compatible with jQuery slideDown
                $('.alert-success').hide().removeClass('hide').slideDown();
            });
        });

        // Hides alert
        $('button[data-dismiss="alert"]').click(function () {
            $(this).parent().slideUp();
        })
    });
})(jQuery);
