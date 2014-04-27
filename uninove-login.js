(function ($) {
    $(document).ready(function () {
        chrome.storage.sync.get('config', function (items) {
            var config = {};

            if (items.config) {
                config = JSON.parse(items.config);
            }

            $('input[name=cLogin]').val(config.username);
            $('#login-central-aluno07 img').click();
            $('input[name=cSenha]').val(config.password);

            if (config.autoLogin) {
                $('a[href="javascript:ok()"] img').click();
            }
        });
    });
})(jQuery);
