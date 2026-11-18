from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('tareas.urls')),
    # Sirve el css, js e imágenes de tareas/static aunque DEBUG = False
    # (necesario para ver las páginas de error personalizadas; solo para desarrollo)
    re_path(r'^static/(?P<path>.*)$', serve,
            {'document_root': settings.BASE_DIR / 'tareas' / 'static'}),
]

handler400 = 'tareas.views.mi_error_400'
handler403 = 'tareas.views.mi_error_403'
handler404 = 'tareas.views.mi_error_404'
handler500 = 'tareas.views.mi_error_500'
