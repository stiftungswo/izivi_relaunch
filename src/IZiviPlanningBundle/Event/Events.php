<?php
namespace IZiviPlanningBundle\Event;


final class Events {
	/**
	 * @var string
	 */
	const ENTITY_PRE_FORM_SET_DATA = 'izivi.entity.pre_form_set_data';

	/**
	 * @var string
	 */
	const ENTITY_PRE_PERSIST = 'izivi.entity.pre_persist';

	/**
	 * @var string
	 */
	const ENTITY_POST_PERSIST = 'izivi.entity.post_persist';

	/**
	 * @var string
	 */
	const ENTITY_PRE_DELETE = 'izivi.entity.pre_delete';

	/**
	 * @var string
	 */
	const ENTITY_POST_DELETE = 'izivi.entity.post_delete';
}