<?php
namespace IZiviPlanningBundle\Event;

use IZiviPlanningBundle\Entity\EntityInterface;
use Symfony\Component\EventDispatcher\Event;

class EntityPersistEvent extends Event
{
	protected $entity;

	public function __construct(EntityInterface $entity)
	{
		$this->entity = $entity;
	}

	public function getEntity()
	{
		return $this->entity;
	}
}