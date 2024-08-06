document.addEventListener('click', function(event) {
    // 检查点击的目标是否是链接
    if (event.target.tagName === 'A') {
        event.preventDefault(); // 阻止默认的链接跳转行为

        var href = event.target.getAttribute('href');

        // 检查链接是否存在
        fetch(href, { method: 'HEAD' })
            .then(response => {
                if (response.status === 404) {
                    // 如果链接不存在，重定向到404页面
                    window.location.href = '../404.html';
                } else {
                    // 如果链接存在，正常跳转
                    window.location.href = href;
                }
            })
            .catch(() => {
                // 如果请求失败，重定向到404页面
                window.location.href = '../404.html';
            });
    }
});
