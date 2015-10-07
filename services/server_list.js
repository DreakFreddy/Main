var ServerListService = (function () {
    function ServerListService() {
        this.servers = [{
                name: 'RDVMPC001',
                ip: '238.103.133.37',
                'tooltip': '',
                'tooltipcls': 'text-success',
                'icon': 'fa-check'
            },
            { name: 'RDVMPC002', ip: '68.66.63.170', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
            { name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
            { name: 'RDVMPC003', ip: '76.117.212.33', 'tooltip': '', 'tooltipcls': 'text-danger', 'icon': 'fa-warning' },
            { name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
            {
                name: 'RDESX003',
                ip: '209.25.191.61',
                'tooltip': 'Could not connect!',
                'tooltipcls': 'text-warning',
                'icon': 'fa-flash'
            },
            { name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
            { name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
            { name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' },
            { name: 'RDESX003', ip: '209.25.191.61', 'tooltip': '', 'tooltipcls': 'text-success', 'icon': 'fa-check' }
        ];
    }
    ServerListService.prototype.get = function () {
        return this.servers;
    };
    ServerListService.prototype.add = function (value) {
        this.servers.push(value);
    };
    ServerListService.prototype.all = function () {
        return this.servers;
    };
    return ServerListService;
})();
exports.ServerListService = ServerListService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZlcl9saXN0LnRzIl0sIm5hbWVzIjpbIlNlcnZlckxpc3RTZXJ2aWNlIiwiU2VydmVyTGlzdFNlcnZpY2UuY29uc3RydWN0b3IiLCJTZXJ2ZXJMaXN0U2VydmljZS5nZXQiLCJTZXJ2ZXJMaXN0U2VydmljZS5hZGQiLCJTZXJ2ZXJMaXN0U2VydmljZS5hbGwiXSwibWFwcGluZ3MiOiJBQUFBO0lBQUFBO1FBQ0VDLFlBQU9BLEdBQVNBLENBQUNBO2dCQUNmQSxJQUFJQSxFQUFFQSxXQUFXQTtnQkFDakJBLEVBQUVBLEVBQUVBLGdCQUFnQkE7Z0JBQ3BCQSxTQUFTQSxFQUFFQSxFQUFFQTtnQkFDYkEsWUFBWUEsRUFBRUEsY0FBY0E7Z0JBQzVCQSxNQUFNQSxFQUFFQSxVQUFVQTthQUNuQkE7WUFDQ0EsRUFBQ0EsSUFBSUEsRUFBRUEsV0FBV0EsRUFBRUEsRUFBRUEsRUFBRUEsY0FBY0EsRUFBRUEsU0FBU0EsRUFBRUEsRUFBRUEsRUFBRUEsWUFBWUEsRUFBRUEsY0FBY0EsRUFBRUEsTUFBTUEsRUFBRUEsVUFBVUEsRUFBQ0E7WUFDeEdBLEVBQUNBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLEVBQUVBLEVBQUVBLGVBQWVBLEVBQUVBLFNBQVNBLEVBQUVBLEVBQUVBLEVBQUVBLFlBQVlBLEVBQUVBLGNBQWNBLEVBQUVBLE1BQU1BLEVBQUVBLFVBQVVBLEVBQUNBO1lBQ3hHQSxFQUFDQSxJQUFJQSxFQUFFQSxXQUFXQSxFQUFFQSxFQUFFQSxFQUFFQSxlQUFlQSxFQUFFQSxTQUFTQSxFQUFFQSxFQUFFQSxFQUFFQSxZQUFZQSxFQUFFQSxhQUFhQSxFQUFFQSxNQUFNQSxFQUFFQSxZQUFZQSxFQUFDQTtZQUMxR0EsRUFBQ0EsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsRUFBRUEsRUFBRUEsZUFBZUEsRUFBRUEsU0FBU0EsRUFBRUEsRUFBRUEsRUFBRUEsWUFBWUEsRUFBRUEsY0FBY0EsRUFBRUEsTUFBTUEsRUFBRUEsVUFBVUEsRUFBQ0E7WUFDeEdBO2dCQUNFQSxJQUFJQSxFQUFFQSxVQUFVQTtnQkFDaEJBLEVBQUVBLEVBQUVBLGVBQWVBO2dCQUNuQkEsU0FBU0EsRUFBRUEsb0JBQW9CQTtnQkFDL0JBLFlBQVlBLEVBQUVBLGNBQWNBO2dCQUM1QkEsTUFBTUEsRUFBRUEsVUFBVUE7YUFDbkJBO1lBQ0RBLEVBQUNBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLEVBQUVBLEVBQUVBLGVBQWVBLEVBQUVBLFNBQVNBLEVBQUVBLEVBQUVBLEVBQUVBLFlBQVlBLEVBQUVBLGNBQWNBLEVBQUVBLE1BQU1BLEVBQUVBLFVBQVVBLEVBQUNBO1lBQ3hHQSxFQUFDQSxJQUFJQSxFQUFFQSxVQUFVQSxFQUFFQSxFQUFFQSxFQUFFQSxlQUFlQSxFQUFFQSxTQUFTQSxFQUFFQSxFQUFFQSxFQUFFQSxZQUFZQSxFQUFFQSxjQUFjQSxFQUFFQSxNQUFNQSxFQUFFQSxVQUFVQSxFQUFDQTtZQUN4R0EsRUFBQ0EsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsRUFBRUEsRUFBRUEsZUFBZUEsRUFBRUEsU0FBU0EsRUFBRUEsRUFBRUEsRUFBRUEsWUFBWUEsRUFBRUEsY0FBY0EsRUFBRUEsTUFBTUEsRUFBRUEsVUFBVUEsRUFBQ0E7WUFDeEdBLEVBQUNBLElBQUlBLEVBQUVBLFVBQVVBLEVBQUVBLEVBQUVBLEVBQUVBLGVBQWVBLEVBQUVBLFNBQVNBLEVBQUVBLEVBQUVBLEVBQUVBLFlBQVlBLEVBQUVBLGNBQWNBLEVBQUVBLE1BQU1BLEVBQUVBLFVBQVVBLEVBQUNBO1NBQ3pHQSxDQUFDQTtJQWFKQSxDQUFDQTtJQVhDRCwrQkFBR0EsR0FBSEE7UUFDRUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0E7SUFDdEJBLENBQUNBO0lBRURGLCtCQUFHQSxHQUFIQSxVQUFJQSxLQUFZQTtRQUNkRyxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtJQUMzQkEsQ0FBQ0E7SUFFREgsK0JBQUdBLEdBQUhBO1FBQ0VJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBO0lBQ3RCQSxDQUFDQTtJQUNISix3QkFBQ0E7QUFBREEsQ0FwQ0EsQUFvQ0NBLElBQUE7QUFwQ1kseUJBQWlCLG9CQW9DN0IsQ0FBQSIsImZpbGUiOiJzZXJ2aWNlcy9zZXJ2ZXJfbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTZXJ2ZXJMaXN0U2VydmljZSB7XG4gIHNlcnZlcnM6YW55W10gPSBbe1xuICAgIG5hbWU6ICdSRFZNUEMwMDEnLFxuICAgIGlwOiAnMjM4LjEwMy4xMzMuMzcnLFxuICAgICd0b29sdGlwJzogJycsXG4gICAgJ3Rvb2x0aXBjbHMnOiAndGV4dC1zdWNjZXNzJyxcbiAgICAnaWNvbic6ICdmYS1jaGVjaydcbiAgfSxcbiAgICB7bmFtZTogJ1JEVk1QQzAwMicsIGlwOiAnNjguNjYuNjMuMTcwJywgJ3Rvb2x0aXAnOiAnJywgJ3Rvb2x0aXBjbHMnOiAndGV4dC1zdWNjZXNzJywgJ2ljb24nOiAnZmEtY2hlY2snfSxcbiAgICB7bmFtZTogJ1JERVNYMDAzJywgaXA6ICcyMDkuMjUuMTkxLjYxJywgJ3Rvb2x0aXAnOiAnJywgJ3Rvb2x0aXBjbHMnOiAndGV4dC1zdWNjZXNzJywgJ2ljb24nOiAnZmEtY2hlY2snfSxcbiAgICB7bmFtZTogJ1JEVk1QQzAwMycsIGlwOiAnNzYuMTE3LjIxMi4zMycsICd0b29sdGlwJzogJycsICd0b29sdGlwY2xzJzogJ3RleHQtZGFuZ2VyJywgJ2ljb24nOiAnZmEtd2FybmluZyd9LFxuICAgIHtuYW1lOiAnUkRFU1gwMDMnLCBpcDogJzIwOS4yNS4xOTEuNjEnLCAndG9vbHRpcCc6ICcnLCAndG9vbHRpcGNscyc6ICd0ZXh0LXN1Y2Nlc3MnLCAnaWNvbic6ICdmYS1jaGVjayd9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSREVTWDAwMycsXG4gICAgICBpcDogJzIwOS4yNS4xOTEuNjEnLFxuICAgICAgJ3Rvb2x0aXAnOiAnQ291bGQgbm90IGNvbm5lY3QhJyxcbiAgICAgICd0b29sdGlwY2xzJzogJ3RleHQtd2FybmluZycsXG4gICAgICAnaWNvbic6ICdmYS1mbGFzaCdcbiAgICB9LFxuICAgIHtuYW1lOiAnUkRFU1gwMDMnLCBpcDogJzIwOS4yNS4xOTEuNjEnLCAndG9vbHRpcCc6ICcnLCAndG9vbHRpcGNscyc6ICd0ZXh0LXN1Y2Nlc3MnLCAnaWNvbic6ICdmYS1jaGVjayd9LFxuICAgIHtuYW1lOiAnUkRFU1gwMDMnLCBpcDogJzIwOS4yNS4xOTEuNjEnLCAndG9vbHRpcCc6ICcnLCAndG9vbHRpcGNscyc6ICd0ZXh0LXN1Y2Nlc3MnLCAnaWNvbic6ICdmYS1jaGVjayd9LFxuICAgIHtuYW1lOiAnUkRFU1gwMDMnLCBpcDogJzIwOS4yNS4xOTEuNjEnLCAndG9vbHRpcCc6ICcnLCAndG9vbHRpcGNscyc6ICd0ZXh0LXN1Y2Nlc3MnLCAnaWNvbic6ICdmYS1jaGVjayd9LFxuICAgIHtuYW1lOiAnUkRFU1gwMDMnLCBpcDogJzIwOS4yNS4xOTEuNjEnLCAndG9vbHRpcCc6ICcnLCAndG9vbHRpcGNscyc6ICd0ZXh0LXN1Y2Nlc3MnLCAnaWNvbic6ICdmYS1jaGVjayd9XG4gIF07XG5cbiAgZ2V0KCk6c3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnNlcnZlcnM7XG4gIH1cblxuICBhZGQodmFsdWU6c3RyaW5nKTp2b2lkIHtcbiAgICB0aGlzLnNlcnZlcnMucHVzaCh2YWx1ZSk7XG4gIH1cblxuICBhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmVycztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9