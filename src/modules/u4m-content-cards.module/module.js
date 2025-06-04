{% for item in module.card_group %}
	{% if item.image.src %}
		{% set sizeAttrs = 'width="{{ item.image.width|escape_attr }}" height="{{ item.image.height|escape_attr }}"' %}
		{% if item.image.size_type == 'auto' %}
			{% set sizeAttrs = 'width="{{ item.image.width|escape_attr }}" height="{{ item.image.height|escape_attr }}" style="max-width: 100%; height: auto;"' %}
		{% elif item.image.size_type == 'auto_custom_max' %}
			{% set sizeAttrs = 'width="{{ item.image.max_width|escape_attr }}" height="{{ item.image.max_height|escape_attr }}" style="max-width: 100%; height: auto;"' %}
		{% endif %}
		 {% set loadingAttr = item.image.loading != 'disabled' ? 'loading="{{ item.image.loading|escape_attr }}"' : '' %}
		<img src="{{ item.image.src|escape_url }}" alt="{{ item.image.alt|escape_attr }}" {{ loadingAttr }} {{ sizeAttrs }}>
	{% endif %}
	{% inline_text field="title" value="{{ item.title }}" %}
	{% if item.include_description %}
		<!-- HTML to show when checked -->
	{% endif %}
	{% inline_text field="description" value="{{ item.description }}" %}
	{% if item.mark_podcast %}
		<!-- HTML to show when checked -->
	{% endif %}
	{% inline_text field="tag.tag_name" value="{{ item.tag.tag_name }}" %}
	{{ item.tag.select_icon_type }}
	{% if item.tag.image.src %}
		{% set sizeAttrs = 'width="{{ item.tag.image.width|escape_attr }}" height="{{ item.tag.image.height|escape_attr }}"' %}
		{% if item.tag.image.size_type == 'auto' %}
			{% set sizeAttrs = 'width="{{ item.tag.image.width|escape_attr }}" height="{{ item.tag.image.height|escape_attr }}" style="max-width: 100%; height: auto;"' %}
		{% elif item.tag.image.size_type == 'auto_custom_max' %}
			{% set sizeAttrs = 'width="{{ item.tag.image.max_width|escape_attr }}" height="{{ item.tag.image.max_height|escape_attr }}" style="max-width: 100%; height: auto;"' %}
		{% endif %}
		 {% set loadingAttr = item.tag.image.loading != 'disabled' ? 'loading="{{ item.tag.image.loading|escape_attr }}"' : '' %}
		<img src="{{ item.tag.image.src|escape_url }}" alt="{{ item.tag.image.alt|escape_attr }}" {{ loadingAttr }} {{ sizeAttrs }}>
	{% endif %}
	{% icon
		name="{{ item.tag.icon_field.name }}"
		style="{{ item.tag.icon_field.type }}"
		unicode="{{ item.tag.icon_field.unicode }}"
		icon_set="{{ item.tag.icon_field.icon_set }}"
	%}
	{{ item.tag.icon_color.color }}
	{{ item.tag.icon_color.opacity }}
	{{ item.button_group.button_type }}
	{{ item.button_group.button_style }}
	{% inline_text field="button_group.button_text" value="{{ item.button_group.button_text }}" %}
	{% set href = item.button_group.link.url.href %}
	{% if item.button_group.link.url.type is equalto "EMAIL_ADDRESS" %}
	  {% set href = "mailto:" + href %}
	{% elif item.button_group.link.url.type is equalto "PHONE_NUMBER" %}
	  {% set href = "tel:" + href %}
	{% endif %}
	<a
	  {% if item.button_group.link.url.type is equalto "CALL_TO_ACTION"  %}
	    href="{{ href }}" {# The href here is not escaped as it is not editable and functions as a JavaScript call to the associated CTA #}
	  {% else %}
	    href="{{ href|escape_url }}"
	  {% endif %}
	  {% if item.button_group.link.open_in_new_tab %}
	    target="_blank"
	  {% endif %}
	  {% if item.button_group.link.rel %}
	    rel="{{ item.button_group.link.rel|escape_attr }}"
	  {% endif %}
	  >
	  Link text
	</a>
	{% cta guid="{{ item.button_group.cta }}" %}
	{% if item.include_overlay_link %}
		<!-- HTML to show when checked -->
	{% endif %}
	{% set href = item.overlay_link.url.href %}
	{% if item.overlay_link.url.type is equalto "EMAIL_ADDRESS" %}
	  {% set href = "mailto:" + href %}
	{% elif item.overlay_link.url.type is equalto "PHONE_NUMBER" %}
	  {% set href = "tel:" + href %}
	{% endif %}
	<a
	  {% if item.overlay_link.url.type is equalto "CALL_TO_ACTION"  %}
	    href="{{ href }}" {# The href here is not escaped as it is not editable and functions as a JavaScript call to the associated CTA #}
	  {% else %}
	    href="{{ href|escape_url }}"
	  {% endif %}
	  {% if item.overlay_link.open_in_new_tab %}
	    target="_blank"
	  {% endif %}
	  {% if item.overlay_link.rel %}
	    rel="{{ item.overlay_link.rel|escape_attr }}"
	  {% endif %}
	  >
	  Link text
	</a>
{% endfor %}