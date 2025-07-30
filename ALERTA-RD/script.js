    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
        function call911() {
            if (confirm('¿Deseas llamar al 911 para emergencia?')) {
                window.location.href = 'tel:911';
            }
        }

        function refreshCameras() {
            const btn = event.target;
            const icon = btn.querySelector('i');
            
            icon.classList.add('fa-spin');
            btn.disabled = true;
            
            setTimeout(() => {
                icon.classList.remove('fa-spin');
                btn.disabled = false;
                alert('Cámaras actualizadas correctamente');
            }, 2000);
        }

        function fullscreen(cameraId) {
            alert(`Abriendo cámara ${cameraId} en pantalla completa`);
        }

        function snapshot(cameraId) {
            alert(`Captura tomada de la cámara ${cameraId}`);
        }

        function toggleRecord(cameraId) {
            alert(`Grabación activada/desactivada para cámara ${cameraId}`);
        }

        function reconnect(cameraId) {
            alert(`Intentando reconectar cámara ${cameraId}...`);
        }


        // Toggle sidebar collapse/expand
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.getElementById('mainContent');
            
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        }

        // Mobile menu functions
        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.querySelector('.mobile-overlay');
            
            sidebar.classList.toggle('mobile-open');
            overlay.classList.toggle('active');
        }

        function closeMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.querySelector('.mobile-overlay');
            
            sidebar.classList.remove('mobile-open');
            overlay.classList.remove('active');
        }

        // Handle window resize
        window.addEventListener('resize', function() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.querySelector('.mobile-overlay');
            
            if (window.innerWidth > 768) {
                sidebar.classList.remove('mobile-open');
                overlay.classList.remove('active');
            }
        });

        // Auto-collapse sidebar on tablets
        function handleResponsiveLayout() {
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.getElementById('mainContent');
            
            if (window.innerWidth <= 1024 && window.innerWidth > 768) {
                sidebar.classList.add('collapsed');
                mainContent.classList.add('expanded');
            } else if (window.innerWidth > 1024) {
                sidebar.classList.remove('collapsed');
                mainContent.classList.remove('expanded');
            }
        }

        // Initialize responsive layout
        window.addEventListener('load', handleResponsiveLayout);
        window.addEventListener('resize', handleResponsiveLayout);