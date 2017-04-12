<?php
namespace IZiviPlanningBundle\Handler;

use IZiviPlanningBundle\Entity\EntityInterface;
use IZiviPlanningBundle\Handler\HandlerInterface;

class GenericHandler extends AbstractHandler implements HandlerInterface {

	/**
	 * Get a Entity for the given identifier
	 *
	 * @api
	 *
	 * @param mixed $id
	 *
	 * @return EntityInterface
	 */
	public function get($id)
	{
		return $this->repository->find($id);
	}

	/**
	 * Get a list of Entities.
	 *
	 * @param array $params The Parameters from the ParamFetcherInterface
	 *
	 * @return array
	 */
	public function all($params = array())
	{
		$this->repository->createCurrentQueryBuilder($this->alias);


		// Filter
		if($this->hasParams($params)) {
			$this->repository->filter($this->cleanParameterBag($params, false));
		}

		//Add Ordering
		$this->orderBy('id', 'ASC');
		$this->orderBy('updatedAt','ASC');

		// Pagination
		return $this->repository->getCurrentQueryBuilder()->getQuery()->getResult();
	}

	/**
	 * Get a list of Entities sorted by date.
	 *
	 * @param array $params The Parameters from the ParamFetcherInterface
	 *
	 * @return array
	 */
	public function allSortedByDate($params = array())
	{
		$this->repository->createCurrentQueryBuilder($this->alias);


		// Filter
		if($this->hasParams($params)) {
			$this->repository->filter($this->cleanParameterBag($params, false));
		}

		//Add Ordering
		$this->orderBy('date', 'ASC');
		$this->orderBy('id', 'ASC');

		// Pagination
		return $this->repository->getCurrentQueryBuilder()->getQuery()->getResult();
	}

	/**
	 * Post Entity, creates a new Entity.
	 *
	 * @api
	 *
	 * @param array $parameters
	 *
	 * @return EntityInterface
	 *
	 */
	public function post(array $parameters)
	{
		$entity = $this->newClassInstance();
		$parameters = $this->flattenEtityReference($parameters);
		if(property_exists($entity, 'user') && !isset($parameters['user'])) { // TODO: remove the isset part after login is implemented
			$parameters['user'] = $this->getCurrentUser()->getId();
		}
		return $this->processForm($entity, $parameters, $this->formType, 'POST');
	}

	/**
	 * Replace data of a Entity.
	 *
	 * @api
	 *
	 * @param EntityInterface $entity
	 * @param array               $parameters
	 *
	 * @return EntityInterface
	 */
	public function put(EntityInterface $entity, array $parameters)
	{
		$parameters = $this->flattenEtityReference($parameters);
		if(property_exists($entity, 'user') && !isset($parameters['user'])) { // TODO: remove the isset part after login is implemented
			$parameters['user'] = $this->getCurrentUser()->getId();
		}
		return $this->processForm($entity, $parameters, $this->formType, 'PUT');
	}

	/**
	 * Delete an Entity
	 *
	 * @api
	 *
	 * @param EntityInterface $entity
	 *
	 */
	public function delete(EntityInterface $entity)
	{
		$this->deleteEntity($entity);
	}
}