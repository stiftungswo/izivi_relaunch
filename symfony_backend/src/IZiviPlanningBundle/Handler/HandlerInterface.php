<?php
namespace IZiviPlanningBundle\Handler;

use IZiviPlanningBundle\Entity\EntityInterface;

interface HandlerInterface
{
    /**
     * Get a Entity given the identifier
     *
     * @api
     *
     * @param mixed $id
     *
     * @return EntityInterface
     */
    public function get($id);

	/**
	 * Get a list of Entities.
	 *
	 * @param array $params
	 *
	 * @return array
	 */
    public function all($params = array());

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
    public function post(array $parameters);

    /**
     * Update data of a Entity.
     *
     * @api
     *
     * @param EntityInterface $entity
     * @param array $parameters
     *
     * @return EntityInterface
    */
    public function put(EntityInterface $entity, array $parameters);

    /**
     * Delete an Entity
     * 
     * @api
     * 
     * @param EntityInterface $entity
     * 
     */
    public function delete(EntityInterface $entity);
}