from django import template

register = template.Library()


@register.inclusion_tag('composer/includes/_maploom_map.html')
def composer_html(options=None):
    """
    Composer html template tag.
    """
    return dict()


@register.inclusion_tag('composer/includes/_maploom_js.html')
def composer_js(options=None):
    """
    Composer js template tag.
    """
    return dict()
